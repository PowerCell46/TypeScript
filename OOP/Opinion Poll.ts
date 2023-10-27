class Person {
    private _name: string;
    private _age: number;
    
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    toString(): string {
        return `${this._name} is ${this._age} years old.`;
    }
}

const me = new Person("Peter", 20);
console.log(me.toString());
