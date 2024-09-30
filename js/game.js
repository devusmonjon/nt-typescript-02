"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
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
exports.Game = Game;
