@withEmploymentDate
class Manager {
    task: string = 'Simple Task';
    project: string = 'Simple Project';

    constructor() {
        console.log(`The manager class has initialized!`);
        
    }
}


const manager = new Manager();
console.log(manager.constructor.prototype); 


function withEmploymentDateOnPrototype(
    value: Function,
    context: ClassDecoratorContext
):void {
    value.prototype.employmentDateOnPrototype = new Date().toISOString();
}

type Args = {new (...args: any[]): {}};

function withEmploymentDate<T extends Args>(
    baseClass: T,
    context: ClassDecoratorContext
) {
    return class extends baseClass {
        constructor(...params: any[]) {
            super(...params); 
        }
    }
}