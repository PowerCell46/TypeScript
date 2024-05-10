import { aboutView } from "../views/about";
import { contactView } from "../views/contact";
import { homeView } from "../views/home";
import { Router } from "./interfaces";


export function renderView() {
    const rootElement = document.querySelector("#root");
    
    const router:Router = {
        "/": homeView,
        "/about": aboutView,
        "/contact": contactView
    };

    if (rootElement) {
        rootElement.innerHTML = router[window.location.pathname];
    }
}