import { Request, Response } from "express";
import { ENDPOINTS, ExpressNext } from "../utils/interfaces";
import { SERVER_ENDPOINTS } from "../utils/constants";
import { getToken, removeCookie, verifyToken } from "../utils/authUtils";


export function authMiddleware(req: Request, res: Response, next: ExpressNext) {
    const token = getToken(req);

    if (token) {
        try {
            const decodedToken = verifyToken(token);

            (req as any).email = decodedToken.email;
            (req as any).userId = decodedToken._id;

            res.locals.isAuthenticated = true;
        
        } catch {
            res.locals.isAuthenticated = false;
            removeCookie(res);

            return res.status(401).render(SERVER_ENDPOINTS.error);
        }
        
    } else {
        res.locals.isAuthenticated = false;
    }
    
    // console.log(res.locals.isAuthenticated);
    
    res.locals.SERVER_ENDPOINTS  = SERVER_ENDPOINTS as ENDPOINTS;


    next();
}