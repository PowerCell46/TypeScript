import { Request, Response } from "express";


export function getHomeView(req: Request, res: Response): void {
    res.render("home");
}
