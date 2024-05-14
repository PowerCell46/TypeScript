import { ENDPOINTS, validationRequirements } from "./interfaces";

export const SERVER_PORT: number = 3000;

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
    delete: "/delete",
    dashboard: "/dashboard",
    details: "/details",
    like: "/like",
    search: "/search" // ???
};


export const userRequirements: validationRequirements = {
    minEmailLen: 10,
    minPassLen: 4
};


export const stoneRequirements: validationRequirements = {
    minNameLen: 2,
    minCategoryLen: 3,
    minColorLen: 2,
    minFormulaLen: 5,
    maxFormulaLen: 30,
    minLocationLen: 5,
    maxLocationLen: 15,
    minDescLen: 10
};


export const STARTING_URLS: string[] = [`http://`, `https://`]; 