// Contract
interface UserDetails {
    firstName: 'Tsveti' | "Gosho" | "Kaloyan",
    lastName: string,
    email?: string, // Optional ?:
    tellDetails: () => void;
}

interface Human {
    skinColor: string,
    legs: number
}

interface PersonDetails extends UserDetails, Human {

}

class Person implements PersonDetails  {
    email: string;
    firstName: "Tsveti" | "Gosho" | "Kaloyan";
    lastName: string;
    skinColor: string = 'White';
    legs: number = 2;

    constructor(lastName: string, email: string) {
        this.email = email
        this.lastName = lastName
        this.firstName = 'Kaloyan'
    }

    tellDetails() {
        console.log(`${this.firstName} ${this.lastName} says Hi!`);
    }
}


interface Calculator {
    (numOne: number, numTwo: number, operation: string): number
}

let calc: Calculator = function (a: number, b: number, operation: string): number {
    const operations: { [key: string]: (a: number, b: number) => number } = {
        "+": (a:number, b:number) => a + b,
        "-": (a:number, b:number) => a - b,
        "*": (a:number, b:number) => a * b,
        "/": (a:number, b:number) => a / b
    }
    return operations[operation](a, b);
}
