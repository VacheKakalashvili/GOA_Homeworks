function* wordGenerator(word) {
    for (let letter of word) {
        yield letter;
    }
}

// Example usage:
const letterGenerator = wordGenerator("example");
console.log(letterGenerator.next().value); // 'e'
console.log(letterGenerator.next().value); // 'x'
