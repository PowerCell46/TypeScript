import { Request, Response } from "express";


export function getEditView(req: Request, res: Response): void {
    res.render("edit");
}


export function editHandler(req: Request, res: Response) {
    console.log(req.body);
    
    res.send("OK");
}