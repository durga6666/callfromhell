let countdownInterval;

function startTimer(minutes) {
    clearInterval(countdownInterval);
    const countdownElement = document.getElementById('countdown');
    const endTime = Date.now() + minutes * 60000;

    function updateCountdown() {
        const now = Date.now();
        const timeLeft = endTime - now;
        const minutesLeft = Math.floor(timeLeft / 60000);
        const secondsLeft = Math.floor((timeLeft % 60000) / 1000);

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Time's up!";
        } else {
            countdownElement.textContent = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
        }
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}
