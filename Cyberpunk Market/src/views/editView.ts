import {TemplateResult, html} from "../../node_modules/lit-html/lit-html";
import { itemHandler } from "../controllers/services/itemController";
import { appEndpoints } from "../utils/constants";
import { ItemData } from "../utils/interfaces";


export default function edit(itemData: ItemData): TemplateResult {
    return html`
        <section id="edit">
          <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form @submit=${(event: SubmitEvent) => itemHandler(event, appEndpoints.edit)} class="edit-form">
            
            <input style="display: none;" type="text" name="_id" id="_id" placeholder="_id" value=${itemData._id}/>

            <input type="text" name="item" id="item" placeholder="Item" value=${itemData.item}/>
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
                value=${itemData.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                value=${itemData.price}
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
                value=${itemData.availability}
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
                value=${itemData.type}
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
              >${itemData.description}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
    `;
}