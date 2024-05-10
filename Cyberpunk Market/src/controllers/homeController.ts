import renderView from "../utils/renderView";
import home from "../views/homeView";


export function homeView(): void {
    renderView(home());
}