import {TemplateResult, html} from "../../node_modules/lit-html/lit-html";
import { logoutHandler } from "../controllers/services/authController";
import { appEndpoints } from "../utils/constants";


export default function header(isAuthenticated: boolean): TemplateResult {
    return html`
            <a id="logo" href=${appEndpoints.home}
            ><img id="logo" src="/images/logo.png" alt="img"
            /></a>

          <nav>
            <div>
              <a href=${appEndpoints.dashboard}>Market</a>
            </div>
  
            ${isAuthenticated ? 
            html`
                <div class="user">
                <a href=${appEndpoints.create}>Sell</a>
                <a @click=${logoutHandler} href="javascript:void(0)">Logout</a>
                </div>
            `
            :
            html`
                <div class="guest">
                    <a href=${appEndpoints.login}>Login</a>
                    <a href=${appEndpoints.register}>Register</a>
                </div>`
            }
            
          </nav>`
}