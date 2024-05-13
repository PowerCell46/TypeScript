import { ENDPOINTS } from "./interfaces";

export const SERVER_PORT: number = 3001;

const APP_NAME: string = `earthTreasureVault`;

export const DB_CONNECTION: string = `mongodb://127.0.0.1:27017/${APP_NAME}`;

export const SALT_ROUNDS: number = 13;

export const TOKEN_SECRET: string = `PowerCell46`;

export const TOKEN_EXPIRATION: string = `1d`;

export const cookieName: string = `authTokenCookie`; 

export const SERVER_ENDPOINTS: ENDPOINTS = {
    home: "/",
    register: "/register",
    login: "/login",
    logout: "/logout",
    create: "/create",
    error: "/404",
    edit: "/edit",
    dashboard: "/dashboard",
    details: "/details",
    search: "/search" // ???
};