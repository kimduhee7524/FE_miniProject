const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const dcieNum = document.querySelector('.diceNum');

let curPlayer  = 1;
let curPlayerScore = 0;
let curPlayerScoreElement;
let curPlayerElement;

var playInit = function(){
    curPlayerScoreElement.textContent =0;
    curPlayerScore=0;
    curPlayerElement.style.backgroundColor ="#AD3047";
}

const rollDice =() => {
    curPlayerScoreElement =document.querySelector(`.player--${curPlayer} .current-score`)
    curPlayerElement =document.querySelector(`.player--${curPlayer}`)
    curPlayerElement.style.backgroundColor = "green";

    const diceValue = getRandomValue();
    dcieNum.textContent = diceValue;

    if(diceValue === 1 || diceValue === 2){
        playInit();
        curPlayer = (curPlayer === 1) ? 2 : 1;
        curPlayerElement =document.querySelector(`.player--${curPlayer}`)
        curPlayerElement.style.backgroundColor = "green";
        console.log("확인");
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
        playInit();
        curPlayer = (curPlayer === 1) ? 2 : 1;
        curPlayerElement =document.querySelector(`.player--${curPlayer}`)
        curPlayerElement.style.backgroundColor = "green";
    }
}

const newStart =()=>{
    curPlayer  = 1;
    playInit();
    curPlayerElement.style.backgroundColor = "green";
}


// 주사위를 굴려서 나온 값을 랜덤하게 설정
function getRandomValue(){
    return Math.floor(Math.random() * 6) + 1;
}


btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdDice);
btnNew.addEventListener("click", newStart);

