import {TemplateResult, html} from "../../node_modules/lit-html/lit-html";


export default function dashboard(): TemplateResult {
    return html`
    <!-- Dashboard page -->
    <h3 class="heading">Market</h3>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          <div class="item">
            <img src="./images/tablet.png" alt="example1" />
            <h3 class="model">Synoptic Eye Tablet</h3>
            <div class="item-info">
              <p class="price">Price: €1000</p>
              <p class="availability">
                Premium retailers, exclusive online stores
              </p>
              <p class="type">Type: Premium Tech</p>
            </div>
            <a class="details-btn" href="#">Uncover More</a>
          </div>
          <div class="item">
            <img src="./images/controller.png" alt="example1" />
            <h3 class="model">Neural Impulse Controller</h3>
            <div class="item-info">
              <p class="price">Price: €799</p>
              <p class="availability">Underground black markets</p>
              <p class="type">Type: Experimental</p>
            </div>
            <a class="details-btn" href="#">Uncover More</a>
          </div>
          <div class="item">
            <img src="./images/drone.png" alt="example1" />
            <h3 class="model">Sky Seeker Drone</h3>
            <div class="item-info">
              <p class="price">Price: €1200</p>
              <p class="availability">Mass-Market Retail, Online Marketplace</p>
              <p class="type">Type: Advanced Surveillance</p>
            </div>
            <a class="details-btn" href="#">Uncover More</a>
          </div>
        </section>
        <!-- Display an h2 if there are no posts -->
        <h3 class="empty">No Items Yet</h3>
        `;
}