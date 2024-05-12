import { Request, Response } from "express";


export function getCreateView(req: Request, res: Response): void {
    res.render("create");
}


export function createHandler(req: Request, res: Response) {
    console.log(req.body);
    
    res.send("OK");
}