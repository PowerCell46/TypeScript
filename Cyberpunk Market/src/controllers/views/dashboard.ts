import renderView from "../../utils/renderView";
import dashboard from "../../views/dashboardView";
import { getAllItems } from "../services/itemController";


export function dashboardView(): void {
    getAllItems()
        .then(data => renderView(dashboard(data)))
        .catch(err => console.error(err));
}