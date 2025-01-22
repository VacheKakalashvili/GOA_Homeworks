function* passwordGenerator() {
    const digits = '0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
        password += digits[Math.floor(Math.random() * 10)];
    }
    yield password;
}

// Example usage:
const passwordGen = passwordGenerator();
console.log(passwordGen.next().value); // Random 8-digit number
