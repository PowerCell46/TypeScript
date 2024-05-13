import { Request, Response } from "express";
import { createToken, hashPassword, setCookie } from "../utils/authUtils";
import { User } from "../schemas/User";
import { UserInterface } from "../utils/interfaces";
import { SERVER_ENDPOINTS, cookieName } from "../utils/constants";


export function getRegisterView(req: Request, res: Response): void {
    res.render("register");
}


export function registerHandler(req: Request, res: Response) {
    const {email, password, rePass} = req.body;

    hashPassword(password)
        .then(hashedPass => {
            User.create({email, password: hashedPass})
                .then((user: UserInterface) => {
                    const token: string = createToken(user.email, user._id);

                    setCookie(res, token);

                    console.log(`User ${user.email} successfully registered!`);

                    res.redirect(SERVER_ENDPOINTS.home);
                })
                .catch((err: Error) => console.log(err));
        })
        .catch(err => console.error(err));
}