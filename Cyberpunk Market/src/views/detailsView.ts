import {TemplateResult, html} from "../../node_modules/lit-html/lit-html";
import { ItemData } from "../utils/interfaces";
import { appEndpoints } from "../utils/constants";


export default function details(itemData: ItemData, isCreator: boolean): TemplateResult {
    return html`
            <section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src=${itemData.imageUrl} alt="example1" />
              <p id="details-title">${itemData.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €${itemData.price}</p>
                <p class="details-availability">
                  ${itemData.availability}
                </p>
                <p class="type">Type: ${itemData.type}</p>
                <p id="item-description">
                  ${itemData.description}
                </p>
              </div>

              ${isCreator ? html`
                <div id="action-buttons">
                  <a href=${`${appEndpoints.edit}/${itemData._id}`} id="edit-btn">Edit</a>
                  <a href="" id="delete-btn">Delete</a>
                </div>` 
              : 
                ""
              }
              
            </div>
          </div>
        </section>
    `;
}