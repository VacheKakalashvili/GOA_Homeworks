function filterGreaterThan10(numbers) {
    return numbers.filter(num => num > 10);
}

// Example
const numList = [5, 11, 3, 22, 9, 17];
console.log(filterGreaterThan10(numList)); // Output: [11, 22, 17]
