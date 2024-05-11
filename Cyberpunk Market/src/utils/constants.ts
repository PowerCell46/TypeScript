import { UrlEndpoints } from "./interfaces";

export const mainElement: HTMLElement | null = document.getElementById('main-element');

export const METHODS_WITH_BODY: string[] = ["POST", "PUT", "PATCH"];

export const headerToken: string = "X-Authorization";

export const AUTH_TOKEN: string = "authToken";

export const USER_ID: string = "userId";

const BASE_URL: string = `http://localhost:3030`;

export const urlEndpoints: UrlEndpoints = {
    register: `${BASE_URL}/users/register`,
    login: `${BASE_URL}/users/login`
}