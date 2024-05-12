import renderView from "../../utils/render";
import home from "../../views/homeView";


export function homeView(): void {  
    renderView(home());
}