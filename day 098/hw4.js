function* letters(word) {
    for (let char of word) {
        yield char;
    }
}

const letterGen = letters("example");
console.log(letterGen.next().value); // "e"
console.log(letterGen.next().value); // "x"
console.log(letterGen.next().value); // "a"
