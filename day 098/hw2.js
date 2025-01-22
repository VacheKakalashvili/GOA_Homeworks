function* evenNumbers() {
    let i = 0;
    while (true) {
        yield i;
        i += 2;
    }
}

const evens = evenNumbers();
console.log(evens.next().value); // 0
console.log(evens.next().value); // 2
console.log(evens.next().value); // 4
