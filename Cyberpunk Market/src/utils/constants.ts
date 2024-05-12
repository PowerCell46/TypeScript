import { AppEndpoints, UrlEndpoints } from "./interfaces";


export const mainElement: HTMLElement | null = document.getElementById('main-element');

export const headerElement: HTMLElement | null = document.querySelector('header');

export const errorContainer: HTMLElement | null = document.querySelector(".notification");


export const METHODS_WITH_BODY: string[] = ["POST", "PUT", "PATCH"];


export const headerToken: string = "X-Authorization";

export const AUTH_TOKEN: string = "authToken";

export const USER_ID: string = "userId";


const BASE_URL: string = `http://localhost:3030`;


export const urlEndpoints: UrlEndpoints = {
    register: `${BASE_URL}/users/register`,
    login: `${BASE_URL}/users/login`,
    items: `${BASE_URL}/data/cyberpunk`,
    itemsDesc: `${BASE_URL}/data/cyberpunk?sortBy=_createdOn%20desc`
};


export const appEndpoints: AppEndpoints = {
    home: "/",
    login: "/login",
    register: "/register",
    create: "/create",
    dashboard: "/dashboard",
    details: "/details",
    edit: "/edit"
};