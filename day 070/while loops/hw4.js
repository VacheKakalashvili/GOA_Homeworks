function fibonacci(limit) {
    let a = 0, b = 1;
    let sequence = [a, b];
    while (b <= limit) {
        let temp = b;
        b = a + b;
        a = temp;
        if (b <= limit) {
            sequence.push(b);
        }
    }
    return sequence;
}