import { getUserId, isAuthenticated } from "../utils/authUtils";
import { PageContext, PageNext } from "../utils/interfaces";


export default function authMiddleware(ctx: PageContext, next: PageNext) {
    ctx.isAuthenticated = isAuthenticated();

    ctx.userId = getUserId();

    next();
} 