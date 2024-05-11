import { AUTH_TOKEN, USER_ID } from "./constants";


export function getAuthToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN);
}


export function setAuthData(accessToken: string, _id: string): void {
    localStorage.setItem(AUTH_TOKEN, accessToken);
    localStorage.setItem(USER_ID, _id);
}


export function getAccessToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN);
}


export function isAuthenticated(): boolean {
    return !!getAccessToken();
}


export function getUserId(): string | null {
    return localStorage.getItem(USER_ID);
}