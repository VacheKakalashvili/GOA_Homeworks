function startDigitalClock() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    
    const intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
                if (hours === 24) {
                    hours = 0;
                }
            }
        }
        console.log((hours < 10 ? '0' + hours : hours) + ':' + 
                    (minutes < 10 ? '0' + minutes : minutes) + ':' + 
                    (seconds < 10 ? '0' + seconds : seconds));
    }, 1000);
}

startDigitalClock();
