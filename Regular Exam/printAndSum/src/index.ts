function printAndSum(startNumber: number, endNumber: number): string {
    let sum: number = 0;
    let numbers: number[] = [];

    for (let currentNumber:number = startNumber; currentNumber <= endNumber; currentNumber++) {
        sum += currentNumber;
        numbers.push(currentNumber);
    }

    return `${numbers.join(" ")}\nSum: ${sum}`;
}

// console.log(printAndSum(5, 10));

// console.log(printAndSum(0, 26));

// console.log(printAndSum(50, 60));
