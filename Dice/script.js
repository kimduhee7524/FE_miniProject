const score1 = document.querySelector('.player--1 .score');
const score2 = document.querySelector('.player--2 .score');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const dcieNum = document.querySelector('.diceNum');

let curPlayer  = 1;
let curPlayerScore = 0;
let curPlayerScoreElement;
let curPlayerElement;

var playerInit = function(){
    curPlayerScoreElement.textContent =0;
    curPlayerScore=0;
    curPlayerElement.style.backgroundColor ="#AD3047";
}
var ChangePlayer = function(){
    curPlayer = (curPlayer === 1) ? 2 : 1;
    curPlayerElement =document.querySelector(`.player--${curPlayer}`)
    curPlayerElement.style.backgroundColor = "green";
}

const rollDice =() => {
    curPlayerScoreElement =document.querySelector(`.player--${curPlayer} .current-score`)
    curPlayerElement =document.querySelector(`.player--${curPlayer}`)
    curPlayerElement.style.backgroundColor = "green";

    const diceValue = getRandomValue();
    dcieNum.textContent = diceValue;

    if(diceValue === 1 || diceValue === 2){
        playerInit();
        ChangePlayer();
    }
    else{
        curPlayerScore += diceValue;
        curPlayerScoreElement.textContent =curPlayerScore;
        if(curPlayerScore >50){
            dcieNum.textContent = `player${curPlayer} 숭리`
            curPlayerScore =0;
        }
        
    }

};
const holdDice =() => {
    if(curPlayerScore>50){
        dcieNum.textContent = `player ${curPlayer} 숭리`
    }
    else{
        // playInit();
        score = document.querySelector(`.player--${curPlayer} .score`);
        score.textContent = Number(score.textContent) + curPlayerScore;
        playerInit();
        ChangePlayer();
    }
}

const newStart =()=>{
    curPlayer  = 1;
    score1.textContent=0;
    score2.textContent=0;
    const curPlayer1=document.querySelector(`.player--1 .current-score`)
    const curPlayer2=document.querySelector(`.player--2 .current-score`)
    curPlayer1.textContent=0;
    curPlayer2.textContent=0;
    const player1 =document.querySelector(`.player--1`)
    const player2 =document.querySelector(`.player--2`)
    player1.style.backgroundColor = "green";
    player2.style.backgroundColor ="#AD3047";
    dcieNum.textContent="?";
}


// 주사위를 굴려서 나온 값을 랜덤하게 설정
function getRandomValue(){
    return Math.floor(Math.random() * 6) + 1;
}


btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdDice);
btnNew.addEventListener("click", newStart);

