import { post } from "../utils/api";
import { setAuthData } from "../utils/authUtils";
import { urlEndpoints } from "../utils/constants";
import { AuthData } from "../utils/interfaces";


export function authenticationHandler(event: SubmitEvent, view: string) {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;

    const data = new FormData(formElement);

    let email = Object.fromEntries(data.entries())["email"] as string;
    let password = Object.fromEntries(data.entries())["password"] as string;
    email = email.trim(); password = password.trim();

    if (view === "Register") {
        let repeatPassword = Object.fromEntries(data.entries())["re-password"] as string;
        repeatPassword = repeatPassword.trim();

        if (repeatPassword !== password) {
            return alert("Password and Repeat password must match!");
        }       
    }

    post<AuthData>(view === "Register" ? 
    urlEndpoints.register : 
    urlEndpoints.login, 
    {email, password})
        .then(data => {
            setAuthData(data.accessToken, data._id);
            
            // is authenticated

            //navigate
        })
        .catch(err => console.error(err));
}