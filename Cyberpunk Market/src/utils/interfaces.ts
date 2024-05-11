export interface UrlEndpoints {
    [key: string]: string
};


export interface AuthData {
    email: string,
    password?: string,
    _id: string,
    _createdOn?: number
    accessToken: string,
};


export interface ItemData {
    _ownerId: string,
    item: string,
    imageUrl: string,
    price: number,
    availability: string,
    type: string,
    description: string,
    _createdOn: number,
    _id: string
};


export interface PageContext {
    isAuthenticated?: boolean;
    userId?: string | null;
    [key: string]: any;
};


export interface PageNext {
    (): void
};