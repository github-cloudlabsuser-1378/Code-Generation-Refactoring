class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Example usage:
// const calc = new Calculator();
// console.log(calc.add(2, 3)); // 5
// console.log(calc.subtract(5, 2)); // 3
// console.log(calc.multiply(3, 4)); // 12
// console.log(calc.divide(10, 2)); // 5

module.exports = Calculator;