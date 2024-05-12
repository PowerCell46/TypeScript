import { Request, Response } from "express";


export function getErrorView(req: Request, res: Response): void {
    res.render("error");
}
