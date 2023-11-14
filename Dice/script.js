// script.js

const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const score1 = document.querySelector('.player--1 .score');
const score2 = document.querySelector('.player--2 .score');
const currentScore1 = document.querySelector('.player--1 .current-score');
const currentScore2 = document.querySelector('.player--2 .current-score');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let activePlayer = 1;
let currentPlayerScore = 0;
let totalScore1 = 0;
let totalScore2 = 0;

function getRandomValue(){
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    // 주사위를 굴려서 나온 값을 랜덤하게 설정
    const diceValue = getRandomValue();
    // 현재 플레이어의 현재 스코어에 주사위 값 추가
    currentPlayerScore += diceValue;
    currentScore1.textContent = currentPlayerScore;
}

btnRoll.addEventListener("click", rollDice);

