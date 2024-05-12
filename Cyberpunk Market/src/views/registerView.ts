import {TemplateResult, html} from "../../node_modules/lit-html/lit-html";
import { authenticationHandler } from "../controllers/services/authController";
import { appEndpoints, urlEndpoints } from "../utils/constants";


export default function register(): TemplateResult {
    return html`
    <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${(event: SubmitEvent) => 
                authenticationHandler(event, appEndpoints.register)}
              class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href=${urlEndpoints.login}>Login</a></p>
            </form>
          </div>
        </section>
    `;
}