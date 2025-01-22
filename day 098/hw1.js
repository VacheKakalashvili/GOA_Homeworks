function* infiniteNumbers() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const numbers = infiniteNumbers();
console.log(numbers.next().value); // 0
console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2
