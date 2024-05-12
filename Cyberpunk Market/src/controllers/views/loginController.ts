import renderView from "../../utils/render";
import login from "../../views/loginView";


export function loginView(): void {
    renderView(login());
}