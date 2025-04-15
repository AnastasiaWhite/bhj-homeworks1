class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    class KeyboardGame {
      constructor() {
        this.wins = 0;
        this.losses = 0;
        this.currentSymbol = '';
        this.startButton = document.getElementById('start-button');
        this.winsDisplay = document.getElementById('wins');
        this.lossesDisplay = document.getElementById('losses');
        this.currentSymbolDisplay = document.querySelector('.current-symbol');
        this.registerEvents();
      }

      registerEvents() {
        this.startButton.addEventListener('click', () => this.startGame());
        document.addEventListener('keydown', (event) => {
          this.checkInput(event.key);
        });
      }

      startGame() {
        this.wins = 0;
        this.losses = 0;
        this.updateDisplay();
        this.nextSymbol();
      }

      nextSymbol() {
        const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.currentSymbol = symbols.charAt(Math.floor(Math.random() * symbols.length));
        this.currentSymbolDisplay.textContent = this.currentSymbol;
      }

      checkInput(input) {
        if (input.toUpperCase() === this.currentSymbol) {
          this.success();
        } else {
          this.fail();
        }
      }

      success() {
        this.wins++;
        this.updateDisplay();
        this.nextSymbol();
        if (this.wins >= 10) {
          alert('Вы победили!');
          this.startGame();
        }
      }

      fail() {
        this.losses++;
        this.updateDisplay();
        if (this.losses >= 3) {
          alert('Вы проиграли!');
          this.startGame();
        }
      }

      updateDisplay() {
        this.winsDisplay.textContent = this.wins;
        this.lossesDisplay.textContent = this.losses;
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      new KeyboardGame();
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
        `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));