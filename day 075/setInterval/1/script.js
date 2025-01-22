function startCountdown(seconds) {
    let remainingTime = seconds;
    const intervalId = setInterval(() => {
        console.log(remainingTime);
        remainingTime--;
        if (remainingTime < 0) {
            clearInterval(intervalId);
            console.log("Time's up!");
        }
    }, 1000);
}

startCountdown(10); // იწყებს 10 წამიან წამზომს
