function printAndSum(startNumber, endNumber) {
    var sum = 0;
    var numbers = [];
    for (var currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
        sum += currentNumber;
        numbers.push(currentNumber);
    }
    return "".concat(numbers.join(" "), "\nSum: ").concat(sum);
}
// console.log(printAndSum(5, 10));
// console.log(printAndSum(0, 26));
console.log(printAndSum(50, 60));
