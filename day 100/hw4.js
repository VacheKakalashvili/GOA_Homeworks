function* wordGenerator(word) {
    for (let letter of word) {
        yield letter;
    }
}

const letterGenerator = wordGenerator("example");
console.log(letterGenerator.next().value);
console.log(letterGenerator.next().value);
console.log(letterGenerator.next().value);
