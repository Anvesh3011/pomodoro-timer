const startEl = document.querySelector("#start");
const stopEl = document.querySelector("#stop");
const resetEl = document.querySelector("#reset");
const timerEl = document.querySelector("#timer");

let interval;

let timeLeft = 1500; //  1500 seconds equals 25 minutes it is constant

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60); //gives minutes
  let seconds = timeLeft % 60; //gives seconds
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  startEl.disabled = true;
  stopEl.disabled = false;
  resetEl.disabled = false;
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time is up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}
startEl.addEventListener("click", startTimer);

function stopTimer() {
  startEl.disabled = false;
  stopEl.disabled = true;
  resetEl.disabled = false;
  clearInterval(interval);
}
stopEl.addEventListener("click", stopTimer);

function resetTimer() {
  startEl.disabled = false;
  stopEl.disabled = false;
  resetEl.disabled = true;
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}
resetEl.addEventListener("click", resetTimer);
