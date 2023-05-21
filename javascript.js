let counterComputer = 0;
let counterPlayer = 0;

let middleContainer = document.getElementById('mid');
    middleContainer.style.opacity = 0;
    middleContainer.style.transform = 'scale(0)';

let endContainer = document.getElementById('end')
    endContainer.style.opacity = 0;
    endContainer.style.transform = 'scale(0)';

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return 'ROCK';
    }
    else if (x === 1) {
        return 'PAPER';
    }
    else {
        return 'SCISSORS';
    }
}

let countingCompScores = document.querySelector('.scoresComp');
let countingPlayScores = document.querySelector('.scoresPlay');

function updateCompDisplay () {
    countingCompScores.innerHTML = counterComputer;
}

function updatePlayDisplay () {
    countingPlayScores.innerHTML = counterPlayer;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    const statement = document.querySelector('.statement')
    const winLose = document.querySelector('.winLose')
    console.log(playerSelection);
    if (playerSelection === computerSelection) {
        statement.textContent = 'Tie'
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        counterPlayer++;
        updatePlayDisplay();
        statement.textContent = 'Win'
        } else if (
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
        (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS')) {
        counterComputer++;
        updateCompDisplay();
        statement.textContent = 'Lose'
        }
    if (counterComputer === 5) {
        winLose.textContent = 'You lose! DEFCON 1!';
        middleContainer.style.opacity = 0;
        middleContainer.style.transform = 'scale(0)';
        middleContainer.style.display = 'none';
        endContainer.style.opacity = 100;
        endContainer.style.transform = 'scale(1)';
    } else if (counterPlayer === 5) {
        winLose.textContent = 'You win! How about a nice game of chess?';
        middleContainer.style.opacity = 0;
        middleContainer.style.transform = 'scale(0)';
        middleContainer.style.display = 'none';
        endContainer.style.opacity = 100;
        endContainer.style.transform = 'scale(1)';
    }
}



let startContainer = document.getElementById('beg');
let btn = document.querySelector("#startbutton");


btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700); 
    middleContainer.style.opacity = 100;
    middleContainer.style.transform = 'scale(1)';
});