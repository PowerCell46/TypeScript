class Project {
    budget: number = 900;

    writeTests() {
        console.log(`Tests are important`);
    }
    @withBudget(500)
    fixBugInProd() {
        console.log(`Fixing bug in production is expensive!`);
    }    
}

const project = new Project();
project.writeTests();
project.fixBugInProd();


function withBudget(actionBudget: number) {
    return function <T extends{budget: number}>(
        target: Function,
        context: ClassMethodDecoratorContext<T>
    ) {
        return function(...args: any[]) {
            console.log(args);
        }
    }
}