import { Request, Response } from "express";


export function getDetailsView(req: Request, res: Response): void {
    res.render("details");
}
