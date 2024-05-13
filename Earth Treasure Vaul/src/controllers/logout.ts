import { Request, Response } from "express";
import { removeCookie } from "../utils/authUtils";
import { SERVER_ENDPOINTS } from "../utils/constants";


export function logoutHandler(req: Request, res: Response) {
    removeCookie(res);
    
    const userEmail = (req as any).email;

    console.log(`User ${userEmail} successfully logged out!`);
    
    res.redirect(SERVER_ENDPOINTS.home);
}