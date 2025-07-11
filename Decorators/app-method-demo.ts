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
    return function <T extends { budget: number }>(
        target: Function, // Unused here, because it's a stage-3 decorator using metadata context
        context: ClassMethodDecoratorContext<T> // Provides context about the method being decorated
    ) {

        // Return a replacement method for the original
        return function (...args: any[]) {
            console.log(args); // Logs arguments when the decorated method is called
            // NOTE: The original method logic is never called here
            // You would need to manually invoke the original method for it to still run
        }
    }
}
