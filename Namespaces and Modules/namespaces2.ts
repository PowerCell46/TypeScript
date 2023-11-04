/// <reference path="./namespaces1.ts"/>

class Person implements Greeter.Greeting {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    introduction() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }

    sayGoodbye(name: string) {
        return `Dear ${name}, it was a pleasure meeting you!`;
    }
}

const me = new Person("Peter", 20);

console.log(me.introduction());

console.log(me.sayGoodbye("Ivan"));
