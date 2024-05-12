import { Request, Response } from "express";


export function getLoginView(req: Request, res: Response): void {
    res.render("login");
}


export function loginHandler(req: Request, res: Response) {
    console.log(req.body);
    
    res.send("OK");
}