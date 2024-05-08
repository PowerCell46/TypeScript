interface Address {
    country: string,
    city: string,
    neighbourhood: string,
    street: string,
    flat: number,
    apartment: number
};

interface Person {
    firstName: string
    middleName: string,
    lastName: string,
    age: number,
    address: Address
};


const me: Person = {
    firstName: "Peter",
    middleName: "Iankov",
    lastName: "Gerdzhikov",
    age: 20,
    address: {
        country: "Bulgaria",
        city: "Sofia",
        neighbourhood: "Sofia Center",
        street: "Hristo Botev",
        flat: 10,
        apartment: 10
    }
};


console.log({me});