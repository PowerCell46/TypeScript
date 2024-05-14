import { Request, Response } from "express";
import { User } from "../schemas/User";
import { UserInterface } from "../utils/interfaces";
import { SERVER_ENDPOINTS } from "../utils/constants";
import { validateUserData } from "../utils/validators";
import { verifyPassword } from "../utils/passwordUtils";
import { createToken } from "../utils/tokenUtils";
import { setCookie } from "../utils/cookieUtils";


export function getLoginView(req: Request, res: Response): void {
    res.render("login");
}


export function loginHandler(req: Request, res: Response): void {
    const email: string = req.body["email"].trim();
    const password: string = req.body["password"].trim(); // sanitization

    const validateResult = validateUserData(email, password);

    if (validateResult !== true) { // validation
        res.render("login", {error: validateResult, email});
        return;
    }

    User.findOne({email})
        .then((user: UserInterface) => {
            verifyPassword(password, user.password)
                .then((correctPass: boolean) => {
                    if (correctPass) {
                        const token: string = createToken(user.email, user._id);

                        setCookie(res, token);

                        console.log(`User ${user.email} successfully logged in!`);

                        res.redirect(SERVER_ENDPOINTS.home);

                    } else {
                        console.log(`Invalid Password!`);
                        
                        res.render("login", {error: "Invalid email or password!", email});
                    }
                })
                .catch((err: Error) => {
                    console.log(`Error verifying the password!`);
                    
                    res.render("login", {error: "Internal server error!", email});
                });
            
        })
        .catch((err: Error) => {
            console.log(`Error finding the user!`);
            
            res.render("login", {error: "Invalid email or password!", email});
        });
}