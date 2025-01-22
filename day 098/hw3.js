function* randomNumbers() {
    while (true) {
        yield Math.random();
    }
}

const randomGen = randomNumbers();
console.log(randomGen.next().value); // Random number like 0.543
console.log(randomGen.next().value); // Another random number like 0.876
