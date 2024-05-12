import { Request, Response } from "express";
// import { hashPassword } from "../utils/authUtils";


export function getRegisterView(req: Request, res: Response): void {
    res.render("register");
}


export function registerHandler(req: Request, res: Response) {
    const {email, password, rePass} = req.body;

    // hashPassword(password)
    //     .then(hashedPass => {
    //         console.log(hashedPass);
    //     })
    //     .catch(err => console.error(err));

    res.send("OK");
}