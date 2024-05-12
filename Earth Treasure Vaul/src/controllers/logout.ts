import { Request, Response } from "express";


export function logoutHandler(req: Request, res: Response) {
    console.log(req.body);
    
    res.send("OK");
}