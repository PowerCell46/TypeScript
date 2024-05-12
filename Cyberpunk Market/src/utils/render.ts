import {TemplateResult, render} from "lit-html";
import { headerElement, mainElement } from "./constants";



export default function renderView(view: TemplateResult): void {
    if (mainElement instanceof HTMLElement) {
        render(view, mainElement);
    } else {
        console.error('Provided element is not an HTMLElement');
    }
}


export function renderHeader(view: TemplateResult): void {
    if (headerElement instanceof HTMLElement) {
        render(view, headerElement);
    } else {
        console.error('Provided element is not an HTMLElement');
    }
}