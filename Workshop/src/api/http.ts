import { BASE_USERS_URL } from "../utils/constants";


export class Http<T> {
    getAll(): void {
        fetch(BASE_USERS_URL)
            .then((res: Response) => res.json())
            .then((data: T[]) => console.log(data))
            .catch(err => console.error(err));
    }

    getOne(id: number): void {
        fetch(`${BASE_USERS_URL}/${id}`)
            .then((res: Response) => res.json())
            .then((data: T) => console.log(data))
            .catch(err => console.error(err));
    }

    create(body: T) {
        fetch(BASE_USERS_URL, {
            method: "POST", 
            headers: {"Content-type": "application/json; charset=UTF-8"}, 
            body: JSON.stringify(body)})

        .then((res: Response) => res.json())
        .then((data: T) => console.log(data))
        .catch(err => console.error(err)); 
    }

    update<T extends {id: number}>(body: T) {
        fetch(`${BASE_USERS_URL}/${body.id}`, {
            method: "PUT", 
            headers: {"Content-type": "application/json; charset=UTF-8"}, 
            body: JSON.stringify(body)})

        .then((res: Response) => res.json())
        .then((data: T) => console.log(data))
        .catch(err => console.error(err));
    }

    delete(id: number) {
        fetch(`${BASE_USERS_URL}/${id}`, {method: "DELETE"})
        .then((res: Response) => res.json())
        .then((data: T) => console.log(data))
        .catch(err => console.error(err));
    }
}
