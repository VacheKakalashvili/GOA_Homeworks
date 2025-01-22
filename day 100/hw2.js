function* evenNumbers() {
    let num = 0;
    while (true) {
        yield num;
        num += 2;
    }
}

// Example usage:
const evenNumGenerator = evenNumbers();
console.log(evenNumGenerator.next().value);
console.log(evenNumGenerator.next().value);
