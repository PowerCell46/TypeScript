export interface UrlEndpoints {
    register: string,
    login: string,
    items: string,
    itemsDesc: string
};


export interface AppEndpoints {
    home: string,
    register: string,
    login: string,
    create: string,
    dashboard: string,
    details: string,
    edit: string
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


export interface DeleteData {
    _deletedOn: number
};


interface Params {
    id: string
};


export interface PageContext {
    isAuthenticated?: boolean;
    userId?: string | null;
    params?: Params,
    [key: string]: any;
};


export interface PageNext {
    (): void
};