let score = 0;
 let defeats = 0;
 const totalMoles = 10;  
 const totalDefeats = 5;  

 function getHole(index) {
 	return document.getElementById(`hole${index}`);
 }

 
 function showMole() {
 	const randomIndex = Math.floor(Math.random() * 9) + 1;  
 	const moleHole = getHole(randomIndex);
 	moleHole.classList.add('hole_has-mole');

 	// Убираем крота через 1 секунду
 	setTimeout(() => {
 		moleHole.classList.remove('hole_has-mole');
 	}, 1000);
 }

 
 function holeClick(event) {
 	if (event.target.classList.contains('hole_has-mole')) {
 		score++;
 		document.getElementById('score').textContent = score;
 		if (score === totalMoles) {
 			alert('Вы выиграли!');
 			resetGame();
 		}
 	} else {
 		defeats++;
 		document.getElementById('defeats').textContent = defeats;
 		if (defeats === totalDefeats) {
 			alert('Вы проиграли!');
 			resetGame();
 		}
 	}
 }

 // Функция для сброса игры
 function resetGame() {
 	score = 0;
 	defeats = 0;
 	document.getElementById('score').textContent = score;
 	document.getElementById('defeats').textContent = defeats;
 }

 // Назначаем обработчики события
 for (let i = 1; i <= 9; i++) {
 	const hole = getHole(i);
 	hole.addEventListener('click', holeClick);
 }

 // Показать крота каждую секунду
 setInterval(showMole, 1500);