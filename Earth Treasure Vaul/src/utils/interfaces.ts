export interface ENDPOINTS {
    home: string,
    register: string,
    login: string,
    logout: string,
    create: string,
    details: string,
    dashboard: string,
    edit: string,
    error: string
    search: string, // ???
}

export interface ExpressNext {
    (): void
}

export interface UserInterface {
    email: string,
    password: string,
    _id: any,
    __v: number
}


export interface TokenInterface {
    email: string,
    _id: string
}