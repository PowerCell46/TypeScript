import {TemplateResult, html} from "../../node_modules/lit-html/lit-html";
import { authenticationHandler } from "../controllers/services/authController";
import { urlEndpoints } from "../utils/constants";


export default function login(): TemplateResult {
    return html`
    <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${(event: SubmitEvent) => 
                authenticationHandler(event, "Login")} 
            class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href=${urlEndpoints.register}>Create an account</a>
              </p>
            </form>
          </div>
        </section>
    `;
}