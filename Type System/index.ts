let person: undefined;

console.log(typeof person);

const arrOfNums: number[] = [1, 2, 3];

const letters: string[] = "Peter".split("");

const arrayOfBools = letters.map(letter => letter === "P");


// console.log(letters);


// console.log(arrayOfBools);


const tuple:[string, number] = ["Peter", 20]; // tuple

console.log(typeof tuple);


enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};


function printPersonDetails(name: string, age?: number): string { // optional parameter
    return age ? `Hello, ${name} you are ${age} years old.` : `Hello, ${name}!`; 
}

console.log(printPersonDetails("Peter", 20));
