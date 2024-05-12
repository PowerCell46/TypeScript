import { Request, Response } from "express";


export function getSearchView(req: Request, res: Response): void {
    res.render("search");
}


export function searchHandler(req: Request, res: Response) {
    console.log(req.body);
    
    res.send("OK");
}