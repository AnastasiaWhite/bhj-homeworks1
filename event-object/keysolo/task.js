class Game {
  constructor() {
      this.wins = 0;  
      this.losses = 0;  
      this.currentWord = '';
      this.currentSymbolIndex = 0;

      this.updateScore();
      this.registerEvents();
      this.startNewWord();
  }

  startNewWord() {
       
      const words = ['коля', 'кот', 'собака', 'мышь', 'птица'];
      this.currentWord = words[Math.floor(Math.random() * words.length)];
      this.currentSymbolIndex = 0;

      this.displayCurrentWord();
  }

  displayCurrentWord() {
      const wordContainer = document.querySelector('.word');
      wordContainer.innerHTML = '';  

      
      Array.from(this.currentWord).forEach((char, index) => {
          const symbolElement = document.createElement('span');
          symbolElement.className = 'symbol';
          symbolElement.textContent = char;
          if (index < this.currentSymbolIndex) {
              symbolElement.classList.add('symbol_correct');
          }
          wordContainer.appendChild(symbolElement);
      });
  }

  registerEvents() {
      document.addEventListener('keydown', (event) => {
          const enteredSymbol = event.key;  
          if (enteredSymbol.length === 1) { // Если введен 1 символ
              if (enteredSymbol.toLowerCase() === this.currentWord[this.currentSymbolIndex].toLowerCase()) {
                  this.success();
              } else {
                  this.fail();
              }
          }
      });
  }

  success() {
      this.currentSymbolIndex++;
     
      if (this.currentSymbolIndex >= this.currentWord.length) {
          this.wins++;
          this.updateScore();
          this.startNewWord();  
      } else {
          this.displayCurrentWord();  
      }
  }

  fail() {
      this.losses++;
      this.updateScore();

      if (this.losses >= 3) {
          alert('Игра окончена! Вы проиграли.');
          this.resetGame();
      }
  }

  updateScore() {
      document.querySelector('.status__wins').textContent = this.wins;
      document.querySelector('.status__loss').textContent = this.losses;
  }

  resetGame() {
      this.wins = 0;
      this.losses = 0;
      this.updateScore();
      this.startNewWord();  
  }
}

 
const game = new Game();