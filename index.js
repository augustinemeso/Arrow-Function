// Function to perform basic arithmetic operations
function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Error: Division by zero is not allowed.";
            }
            break;
        default:
            return "Error: Invalid operation.";
    }

    return result;
}

// Example usage
console.log(calculate(10, 5, "add"));         // Output: 15
console.log(calculate(10, 5, "subtract"));    // Output: 5
console.log(calculate(10, 5, "multiply"));    // Output: 50
console.log(calculate(10, 5, "divide"));      // Output: 2
console.log(calculate(10, 0, "divide"));      // Output: Error: Division by zero is not allowed.
console.log(calculate(10, 5, "unknown"));     // Output: Error: Invalid operation.
