function generateRandomNumber() {
    const intervalId = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
    }, 2000);
}

generateRandomNumber();
