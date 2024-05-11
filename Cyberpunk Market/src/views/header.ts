import {TemplateResult, html} from "../../node_modules/lit-html/lit-html";
import { logoutHandler } from "../controllers/services/authController";


export default function header(isAuthenticated: boolean): TemplateResult {
    return html`
            <a id="logo" href="/"
            ><img id="logo" src="/images/logo.png" alt="img"
            /></a>

          <nav>
            <div>
              <a href="/dashboard">Market</a>
            </div>
  
            ${isAuthenticated ? 
            html`
                <div class="user">
                <a href="/create">Sell</a>
                <a @click=${logoutHandler} href="javascript:void(0)">Logout</a>
                </div>
            `
            :
            html`
                <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`
            }
            
          </nav>`
}