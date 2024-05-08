namespace Greeter {
    export interface Greeting {
        introduction(): string;
        sayGoodbye(name: string): string;
    }
}

namespace PersonUtils { 
    interface Introduction {
        (): string
    }

    export interface PersonInterface {
        name: string,
        age: number,
        introduction: Introduction
    }

    export class Person implements PersonInterface {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.age = age;
            this.name = name;
        }

        introduction() {
            return `${this.name} of ${this.age} years of age.`;
        }
    }
}


const meInstance:PersonUtils.PersonInterface = new PersonUtils.Person("Peter", 20);
console.log(meInstance.introduction());