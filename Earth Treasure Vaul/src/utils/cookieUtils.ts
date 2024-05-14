import { cookieName } from "./constants";


export function setCookie(res: any, token: string): void {
    res.cookie(cookieName, token, {httpOnly: true});
}


export function removeCookie(res: any): void {
    res.clearCookie(cookieName);
}