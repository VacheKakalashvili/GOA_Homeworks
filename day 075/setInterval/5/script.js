function generateRandomWord() {
    const words = ["apple", "banana", "cherry", "date", "elderberry"];
    const intervalId = setInterval(() => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        console.log(randomWord);
    }, 2000);
}

generateRandomWord();
