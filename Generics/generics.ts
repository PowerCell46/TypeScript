// const getId = <T, K>(paramId: T): K => {
//     return paramId.toString();
// }


// const id1 = getId<number, string>(1);
// const id2 = getId<string, string>('fevds');
// const id3 = getId<number[], string>([1, 2, 3]);

// type UserData = {
//     name: string,
//     age: number,
//     address: string
// }

// const x = getId<UserData>({name: 'Mitko', address: "Sofia", age: 20});

type personDetails = {
    name: string,
    age: number,
    city: string
}


type AnimalDetails = {
    legsCount: number,
    furColour: string,
    name: string
}


const animal: AnimalDetails = {legsCount: 4, furColour: "white", name: "De da znam"}

const person: personDetails = {name: 'Mitko', age: 21, city: "Lovech"};




function generateAndAttachId<T>(obj: T) {
    return {...obj, id: Math.floor(Math.random() * 100)}
}



const personWithId = generateAndAttachId(person);
console.log(personWithId);


const animalWithId = generateAndAttachId(animal);
console.log(animalWithId);



interface DocumentObject<T> {
    id: number,
    name: string,
    data: T
}

const doc1 = {
    id: 1,
    name: "flowers",
    data: [{name: 'flower1'}, {name: 'flower2'}]
}

const doc2 = {
    id: 2,
    name: 'persons',
    data: {name: "Pesho", age: 12, address: "Bulgaria"}
}


// function echo<T>(arg: T): T {
//     console.log(typeof arg);
//     return arg;
// }


// const takeLast = <T>(arr: T[]): T => {
//     return arr[arr.length -1];
// }


const obj = {a: 1, b: 2, c: 3}
console.log(Object.entries(obj));

const makeTuples = <T, Z>(a: T, b: Z) => {
    return [a, b];
}



type GenericConstructor<T, V> = {
    (arg1: T,arg2: V): [T, V];
}

class Collection<T> {
    data: T[];

    constructor(...elements:T[]) {
        this.data = elements;
    }

    addElement(el: T) {
        this.data.push(el);
    }

    removeElement(el: T) {
        const index = this.data.indexOf(el);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }
}

const numCollection = new Collection(1, 2, 3, 4);
console.log(numCollection.data);
numCollection.addElement(99);
numCollection.removeElement(2);

const strCollection = new Collection('a', 'b', 'c');
strCollection.addElement("Pokemon");
strCollection.removeElement('a');

const person2 = {age: 33, address: "Sofia, Bulgaria"}

interface FullName {
    firstName: string,
    lastName: string
} 


function fullName<T extends FullName>(obj: T) {
    return `The full name of the user is ${obj.firstName} ${obj.lastName}`
}


interface GenericConstructor1<T, V> {
    (arg: T, param: V): [T, V];
}

const generatedFn: GenericConstructor1<string, string> = <T, V> (arg: T, param: V) => {
    return [arg, param]
}

const sample = generatedFn('HEllo', 'World');
