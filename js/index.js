"use strict";
class Game {
    constructor() {
        this.player1Score = 0;
        this.player2Score = 0;
        this.currentNumber = this.getRandomNumber();
    }
    playTurn(player) {
        if (player === 1) {
            this.player1Score += this.currentNumber;
        }
        else {
            this.player2Score += this.currentNumber;
        }
        this.currentNumber = this.getRandomNumber();
    }
    getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }
    checkWinner() {
        if (this.player1Score >= 100) {
            return 1;
        }
        else if (this.player2Score >= 100) {
            return 2;
        }
        return null;
    }
}
const display1 = document.querySelector(".display-number-1");
const display2 = document.querySelector(".display-number-2");
const player1Btn = document.getElementById("player1-btn");
const player2Btn = document.getElementById("player2-btn");
const player1ScoreElem = document.getElementById("player1-score");
const player2ScoreElem = document.getElementById("player2-score");
const winModal = document.getElementById("win-modal");
const winnerText = document.getElementById("winner-text");
const restartBtn = document.getElementById("restart-btn");
let game = new Game();
function updateUI(display, hideDisplay) {
    player1ScoreElem.innerText = game.player1Score.toString();
    player2ScoreElem.innerText = game.player2Score.toString();
    if (display && hideDisplay) {
        display.innerText = game.currentNumber.toString();
        hideDisplay.style.opacity = "0";
        display.style.opacity = "1";
    }
}
player1Btn.addEventListener("click", () => {
    game.playTurn(1);
    player1Btn.disabled = true;
    player2Btn.disabled = false;
    updateUI(display1, display2);
    checkForWinner();
});
player2Btn.addEventListener("click", () => {
    game.playTurn(2);
    player1Btn.disabled = false;
    player2Btn.disabled = true;
    updateUI(display2, display1);
    checkForWinner();
});
restartBtn.addEventListener("click", () => {
    game = new Game();
    winModal.style.display = "none";
    player1Btn.disabled = false;
    player2Btn.disabled = true;
    updateUI();
});
function checkForWinner() {
    const winner = game.checkWinner();
    if (winner) {
        winnerText.innerText = `Player ${winner} Wins!`;
        winModal.style.display = "flex";
    }
}
updateUI();
