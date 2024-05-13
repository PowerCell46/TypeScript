const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");    
import {SALT_ROUNDS, TOKEN_EXPIRATION, TOKEN_SECRET, cookieName} from "./constants";
import { TokenInterface } from "./interfaces";


export function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
}


export function verifyPassword(password: string, hashedPass: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPass);
}


export function createToken(email: string, _id: string): string {
    const tokenData:TokenInterface = {
        email, 
        _id
    };

    return jwt.sign(tokenData, TOKEN_SECRET, {expiresIn: TOKEN_EXPIRATION});
}


export function getToken(req: any): string {
    return req.cookies[cookieName];
}


export function verifyToken(token: string): TokenInterface {
    try {
        const result = jwt.verify(token, TOKEN_SECRET) as TokenInterface;
        return result;

    } catch (error) {
        throw new Error("Invalid Token");
    }
}


export function setCookie(res: any, token: string): void {
    res.cookie(cookieName, token, {httpOnly: true});
}


export function removeCookie(res: any): void {
    res.clearCookie(cookieName);
}