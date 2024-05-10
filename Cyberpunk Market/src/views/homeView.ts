import {html, TemplateResult} from "../../node_modules/lit-html/lit-html";


export default function home(): TemplateResult {
    return html`
    <section id="hero">
          <img src="./images/home.png" alt="home" />
          <p>We know who you are, we will contact you</p>
    </section>
    `;
}