import { PageContext } from "../../utils/interfaces";
import renderView from "../../utils/render";
import details from "../../views/detailsView";
import { getSingleItem } from "../services/itemController";


export function detailsView(ctx: PageContext): void {
    const itemId: string | undefined = ctx.params?.id;
    
    getSingleItem(itemId)
        .then(data => {
            const isCreator: boolean = data._ownerId === ctx.userId; 
            renderView(details(data, isCreator, ctx));
        })
        .catch(err => console.error(err));
}