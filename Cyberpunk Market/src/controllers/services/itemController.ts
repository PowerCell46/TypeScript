import { get, post, put } from "../../utils/api";
import { appEndpoints, urlEndpoints } from "../../utils/constants";
import { ItemData } from "../../utils/interfaces";
import page from "page";


export function itemHandler(event: SubmitEvent, view: string):void {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;

    const data = new FormData(formElement);

    let item = Object.fromEntries(data.entries())["item"] as string;
    let imageUrl = Object.fromEntries(data.entries())["imageUrl"] as string;
    let price = Number(Object.fromEntries(data.entries())["price"]) as number;
    let availability = Object.fromEntries(data.entries())["availability"] as string;
    let type = Object.fromEntries(data.entries())["type"] as string;
    let description = Object.fromEntries(data.entries())["description"] as string;
    
    imageUrl = imageUrl.trim(); availability = availability.trim(); // sanitization
    type = type.trim(); description = description.trim(); item = item.trim();

    if (imageUrl === "" || availability === "" || type === "" ||
    item === "" || description == "") { // validation
        return alert("You cannot submit with empty fields!");
    
    } else if (price <= 0) {
        return alert("Invalid Price entered!");
    }

    if (view === appEndpoints.create) {
        post<ItemData>(urlEndpoints.items, 
        {item, imageUrl, price, availability, type, description})  
            .then(data => {
                console.log(data);
                
                page.redirect(appEndpoints.dashboard);
            })
            .catch(err => console.error(err)); 
    
    } else {
        let _id = Object.fromEntries(data.entries())["_id"] as string;
        
        put<ItemData>(`${urlEndpoints.items}/${_id}`, 
        {item, imageUrl, price, availability, type, description})
            .then(data => {
                // console.log(data);
                
                page.redirect(`${appEndpoints.details}/${_id}`);
            })
            .catch(err => console.error(err));
    } 
}


export function getAllItems(): Promise<ItemData[]> {
    return get<ItemData[]>(urlEndpoints.items);
}


export function getSingleItem(_id: string | undefined): Promise<ItemData> {
    return get<ItemData>(`${urlEndpoints.items}/${_id}`);
}