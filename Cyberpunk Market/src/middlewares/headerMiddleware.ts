import { PageContext, PageNext } from "../utils/interfaces";
import { renderHeader } from "../utils/renderView";
import header from "../views/header";


export default function headerMiddleware(ctx: PageContext, next: PageNext): void {
    renderHeader(header(!!ctx.isAuthenticated));

    next();
}