function calculator(firstNumber, operator, secondNumber) {
    var calcObj = {
        "+": function (a, b) { return a + b; },
        "-": function (a, b) { return a - b; },
        "*": function (a, b) { return a * b; },
        "/": function (a, b) { return a / b; }
    };
    return calcObj[operator](firstNumber, secondNumber).toFixed(2);
}
// console.log(calculator(50, "/", 10));
function lowestPricesInCities(array) {
    var productObj = {};
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var data = array_1[_i];
        var _a = data.split(" | "), town = _a[0], product = _a[1], price = _a[2];
        if (!Object.keys(productObj).includes(product)) {
            productObj[product] = [town, price];
        }
        else {
            if (Number(price) < Number(productObj[product][1])) {
                productObj[product] = [town, price];
                console.log("Changed value");
            }
        }
    }
    return Object.keys(productObj)
        .map(function (product) { return "".concat(product, " -> ").concat(productObj[product][1], " (").concat(productObj[product][0], ")"); })
        .join("\n");
}
console.log(lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']));
