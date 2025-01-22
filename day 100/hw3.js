function* randomNumbers() {
    while (true) {
        yield Math.random();
    }
}

// Example usage:
const randomNumGenerator = randomNumbers();
console.log(randomNumGenerator.next().value);
console.log(randomNumGenerator.next().value);