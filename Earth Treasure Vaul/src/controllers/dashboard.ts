import { Request, Response } from "express";


export function getDashboardView(req: Request, res: Response): void {
    res.render("dashboard");
}