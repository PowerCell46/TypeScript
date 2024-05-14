import { TOKEN_EXPIRATION, TOKEN_SECRET, cookieName } from "./constants";
import { TokenInterface } from "./interfaces";
const jwt = require("jsonwebtoken");    


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