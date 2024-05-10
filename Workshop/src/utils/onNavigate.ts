import { renderView } from "./renderView";


export function onNavigate (pathName: string) {
    window.history
        .pushState({}, pathName, `${window.location.origin}${pathName}`);
    
    renderView();
};