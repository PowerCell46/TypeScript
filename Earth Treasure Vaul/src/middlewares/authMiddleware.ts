import { Request, Response } from "express";
import { ENDPOINTS, ExpressNext } from "../utils/interfaces";
import { SERVER_ENDPOINTS } from "../utils/constants";


export function authMiddleware(req: Request, res: Response, next: ExpressNext) {
    console.log(res.locals);
    
    res.locals.SERVER_ENDPOINTS  = SERVER_ENDPOINTS as ENDPOINTS;

    next();
}