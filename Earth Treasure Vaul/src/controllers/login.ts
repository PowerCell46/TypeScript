import { Request, Response } from "express";
import { User } from "../schemas/User";
import { UserInterface } from "../utils/interfaces";
import { createToken, setCookie, verifyPassword } from "../utils/authUtils";
import { SERVER_ENDPOINTS } from "../utils/constants";


export function getLoginView(req: Request, res: Response): void {
    res.render("login");
}


export function loginHandler(req: Request, res: Response) {
    const { email, password } = req.body;

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