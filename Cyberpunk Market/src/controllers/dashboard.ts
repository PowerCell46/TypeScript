import renderView from "../utils/renderView";
import dashboard from "../views/dashboardView";


export function dashboardView(): void {
    return renderView(dashboard());
}