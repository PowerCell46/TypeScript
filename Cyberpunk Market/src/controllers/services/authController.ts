import { post } from "../../utils/api";
import { removeAuthData, setAuthData } from "../../utils/authUtils";
import { appEndpoints, urlEndpoints } from "../../utils/constants";
import displayErrorMessage from "../../utils/displayError";
import { AuthData } from "../../utils/interfaces";
import page from "page";


export function authenticationHandler(event: SubmitEvent, view: string): void {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;

    const data = new FormData(formElement);

    let email = Object.fromEntries(data.entries())["email"] as string;
    let password = Object.fromEntries(data.entries())["password"] as string;
   
    email = email.trim(); password = password.trim(); // sanitization

    if (email === "" || password === "") { // validation
        return displayErrorMessage("You cannot submit with empty fields!");
    }

    if (view === appEndpoints.register) {
        let repeatPassword = Object.fromEntries(data.entries())["re-password"] as string;
        repeatPassword = repeatPassword.trim();

        if (repeatPassword !== password) {
            return displayErrorMessage("Passwords don't match");
        }       
    }

    post<AuthData>(view === appEndpoints.register ? 
    urlEndpoints.register : 
    urlEndpoints.login, 
    {email, password})
        .then(data => {
            // console.log(data);
            
            setAuthData(data.accessToken, data._id);

            page.redirect(appEndpoints.home);
        })
        .catch(err => console.error(err));
}


export function logoutHandler(): void {
    removeAuthData();

    page.redirect(appEndpoints.home);
}