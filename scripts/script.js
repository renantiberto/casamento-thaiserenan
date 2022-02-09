import Countdown from "./countdown.js"

const countdownWedding = new Countdown("02 April 2022 16:00:00 GMT-0300");
const times =  document.querySelectorAll("[data-time]");

function revealTime() {
    times.forEach((time, index) => {
        time.innerHTML = countdownWedding.total[index];
    });
}
revealTime();
setInterval(revealTime, 1000);