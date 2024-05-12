import { getSingleItem } from "../controllers/services/itemController";
import { getUserId, isAuthenticated } from "../utils/authUtils";
import { appEndpoints } from "../utils/constants";
import { PageContext, PageNext } from "../utils/interfaces";
import page from "page";


export default function authMiddleware(ctx: PageContext, next: PageNext): void {
    ctx.isAuthenticated = isAuthenticated();

    ctx.userId = getUserId();

    next();
} 


export function authRequired(ctx: PageContext, next: PageNext): void {
    if (!ctx.isAuthenticated) {
        page.redirect(appEndpoints.login);
    
    } else {
        next();
    }
}


export function authForbidden(ctx: PageContext, next: PageNext): void {
    if (ctx.isAuthenticated) {
        page.redirect(appEndpoints.home);

    } else {
        next();
    }
}


export function creatorRequired(ctx: PageContext, next?: PageNext): void {
    getSingleItem(ctx.params?.id)
        .then(data => data._ownerId === ctx.userId ? 
                (next ? 
                    next()
                : 
                    null
                )
            :
                page.redirect(appEndpoints.home))
        .catch(err => console.error(err));    
}