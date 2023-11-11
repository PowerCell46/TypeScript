function calculator(firstNumber: number, operator: string, secondNumber: number): number {
  
     const calcObj = {
        "+": (a:number, b: number): number => a + b,
        "-": (a:number, b: number): number => a - b,
        "*": (a:number, b: number): number => a * b,
        "/": (a:number, b: number): number => a / b
    }

    return calcObj[operator](firstNumber, secondNumber).toFixed(2);
}

// console.log(calculator(50, "/", 10));


