import { Request, Response } from "express";
import { ENDPOINTS, ExpressNext, StoneInterface } from "../utils/interfaces";
import { SERVER_ENDPOINTS } from "../utils/constants";
import { getSingleStone } from "../services/stonesService";
import { getToken, verifyToken } from "../utils/tokenUtils";
import { removeCookie } from "../utils/cookieUtils";


export function authMiddleware(req: Request, res: Response, next: ExpressNext): void {
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


export function authRequired(req: Request, res: Response, next: ExpressNext): void {
    if (!res.locals.isAuthenticated) {
        res.redirect(SERVER_ENDPOINTS.error);
    
    } else {
        next();
    }
}


export function authForbidden(req: Request, res: Response, next: ExpressNext): void {
    console.log("FORBIDDEN MIDDLEWARE");
    
    if (res.locals.isAuthenticated) {
        res.redirect(SERVER_ENDPOINTS.error);
    
    } else {
        next();
    }
}


export function creatorRequired(req: Request, res: Response, next: ExpressNext): void {
    const stoneId: string = req.params.id;
    const userId = (req as any).userId as string;

    getSingleStone(stoneId)
        .then((stoneData: StoneInterface) => {
            if (stoneData.owner.toString() === userId) {
                next();
            
            } else {
                res.redirect(SERVER_ENDPOINTS.error);
            }
        })
        .catch(err => console.error(err));
}