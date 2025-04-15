let timeRemaining = 10;
const timerDisplay = document.getElementById('timer');

function updateTimer() {
	if (timeRemaining > 0) {
		timerDisplay.textContent = timeRemaining;
		timeRemaining--;
	} else {
		clearInterval(timerInterval);
		alert("Вы победили в конкурсе!");
	}
}


const timerInterval = setInterval(updateTimer, 1000);


timerDisplay.textContent = timeRemaining;