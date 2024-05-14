import { Request, Response } from "express";
import { User } from "../schemas/User";
import { UserInterface } from "../utils/interfaces";
import { SERVER_ENDPOINTS } from "../utils/constants";
import { validateUserData } from "../utils/validators";
import { hashPassword } from "../utils/passwordUtils";
import { createToken } from "../utils/tokenUtils";
import { setCookie } from "../utils/cookieUtils";


export function getRegisterView(req: Request, res: Response): void {
    res.render("register");
}


export function registerHandler(req: Request, res: Response): void {
    const email: string = req.body["email"].trim();
    const password: string = req.body["password"].trim();
    const repeatPass: string = req.body["repeatPass"].trim(); // sanitization

    if (password !== repeatPass) {
        res.render("register", {error: "Both Passwords must match!", email});
        return;
    }

    const validateResult = validateUserData(email, password);

    if (validateResult !== true) { // validation
        res.render("login", {error: validateResult, email});
        return;
    }

    hashPassword(password)
        .then(hashedPass => {
            User.create({email, password: hashedPass})
                .then((user: UserInterface) => {
                    const token: string = createToken(user.email, user._id);

                    setCookie(res, token);

                    console.log(`User ${user.email} successfully registered!`);

                    res.redirect(SERVER_ENDPOINTS.home);
                })
                .catch((err: Error) => {
                    console.log(`Error creating the User!`);

                    res.render("register", {error: "This email is already taken!", email})                    
                });
        })
        .catch(err => {
            console.log(`Error with the hashing of the password!`);

            res.render("register", {error: "Internal Server Error", email})
        });
}