import 'isomorphic-fetch';

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

interface Address {
    street: string,
    suite :string,
    city: string,
    zipcode: string,
    geo: object
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

async function fetchData(): Promise<void> {
    const response = await  fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await response.json();
    console.log(data);
    // const ids = data.map((d) => d.id);
    // console.log(ids);    
}

console.log(fetchData());
