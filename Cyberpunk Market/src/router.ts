import { html, render } from 'lit-html';
import page from "page";


const homeEl = html`<a href="/about">About</a> <h1>Hello Home Page!</h1>`;
const aboutEl = html`<a href="/">Home</a> <h1>Hello About Page!</h1>`;


const container = document.querySelector('#root');

if (container instanceof HTMLElement) {
    page("/", () => render(homeEl, container));
    page("/about", () => render(aboutEl, container));
} else {
    console.error('The specified container does not exist or is not an HTMLElement');
}

page.start();