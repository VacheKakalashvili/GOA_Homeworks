const calculator = {
    addition: function(a, b) {
        const result = a + b;
        console.log(`Addition result: ${result}`);
        return result;
    },
    subtraction: function(a, b) {
        const result = a - b;
        console.log(`Subtraction result: ${result}`);
        return result;
    },
    multiplication: function(a, b) {
        const result = a * b;
        console.log(`Multiplication result: ${result}`);
        return result;
    },
    division: function(a, b) {
        if (b === 0) {
            console.log("Error: Division by zero!");
            return NaN;
        }
        const result = a / b;
        console.log(`Division result: ${result}`);
        return result;
    },
    equality: function(a, b) {
        const result = a === b;
        console.log(`Equality result: ${result}`);
        return result;
    }
};

calculator.addition(5, 3);
calculator.subtraction(10, 4);
calculator.multiplication(6, 7);
calculator.division(20, 5);
calculator.equality(5, 5);
