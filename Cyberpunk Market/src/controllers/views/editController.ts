import { PageContext } from "../../utils/interfaces";
import renderView from "../../utils/renderView";
import edit from "../../views/editView";
import { getSingleItem } from "../services/itemController";


export function editView(ctx: PageContext): void {
    const itemId: string | undefined = ctx.params?.id;

    getSingleItem(itemId)
        .then(data => renderView(edit(data)))
        .catch(err => console.error(err));
}