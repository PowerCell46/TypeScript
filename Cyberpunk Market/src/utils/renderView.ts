import {TemplateResult, render} from "../../node_modules/lit-html/lit-html";
import { mainElement } from "./constants";



export default function renderView(view: TemplateResult): void {
    if (mainElement instanceof HTMLElement) {
        render(view, mainElement);
    } else {
        console.error('Provided element is not an HTMLElement');
    }
}