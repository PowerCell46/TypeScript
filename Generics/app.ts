interface NameTest {
    (param1: number, param2: string): string
}

const getName: NameTest = (param1: number, param2: string): string => {
    return `Name: ${param2}, Number: ${param1}`;
};

console.log(getName(20, 'Peter'));
