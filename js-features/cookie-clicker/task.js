let score = 0;
 let lastClickTime = 0;
 const cookie = document.getElementById('cookie');
 const scoreDisplay = document.getElementById('score');
 const clickSpeedDisplay = document.getElementById('click-speed');

 // Функция для обработки клика по печеньке
 function cookieClicked() {
 	// Увеличиваем счётчик кликов
 	score++;
 	scoreDisplay.textContent = score;

 	// Вычисляем скорость клика
 	const currentTime = new Date().getTime();
 	if (lastClickTime > 0) {
 		const timeElapsed = (currentTime - lastClickTime) / 1000; // Время в секундах
 		const clickSpeed = (1 / timeElapsed).toFixed(2); // Скорость клика
 		clickSpeedDisplay.textContent = clickSpeed;
 	}
 	lastClickTime = currentTime;

 	// Чередуем размер печеньки
 	if (cookie.style.width === "100px") {
 		cookie.style.width = "120px";
 		cookie.style.height = "120px";
 	} else {
 		cookie.style.width = "100px";
 		cookie.style.height = "100px";
 	}
 }

 // Обработчик события для клика по печеньке
 cookie.addEventListener('click', cookieClicked);