import { Request, Response } from "express";
import { createToken, hashPassword, setCookie } from "../utils/authUtils";
import { User } from "../schemas/User";
import { UserInterface } from "../utils/interfaces";
import { SERVER_ENDPOINTS } from "../utils/constants";


export function getRegisterView(req: Request, res: Response): void {
    res.render("register");
}


export function registerHandler(req: Request, res: Response) {
    const email: string = req.body["email"].trim();
    const password: string = req.body["password"].trim();
    const repeatPass: string = req.body["repeatPass"].trim();

    if (password !== repeatPass) {
        res.render("register", {error: "Both Passwords must match!", email});
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