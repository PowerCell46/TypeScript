import { Request, Response } from "express";
import { SERVER_ENDPOINTS } from "../utils/constants";
import { removeCookie } from "../utils/cookieUtils";


export function logoutHandler(req: Request, res: Response): void {
    removeCookie(res);
    
    const userEmail = (req as any).email;

    console.log(`User ${userEmail} successfully logged out!`);
    
    res.redirect(SERVER_ENDPOINTS.home);
}