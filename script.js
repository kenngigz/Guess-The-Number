'use strict';

const userInputSubmit = document.querySelector('.check');
const userGuess = document.querySelector('.guess');
const message = document.querySelector('.message');
const turnsRemaining = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const correctNumber = document.querySelector('.number');
const resetGame = document.querySelector('.again');

let turns = 20;
// Generate a random Number
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

//Get player input number
userInputSubmit.addEventListener('click', getInputValue);
resetGame.addEventListener('click', resetTheGame);

function getInputValue() {
  let userValue = userGuess.value;

  if (userValue < 0 || userValue > 100) {
    alert('Value has to be between 1 and 100');
  } else if (userValue == randomNumber) {
    message.innerHTML = 'Correct';
    correctNumber.innerHTML = randomNumber;
    highScore.innerHTML = turns + 1;
    userInputSubmit.disabled = true;
    userGuess.disabled = true;
  } else if (userValue > randomNumber) {
    message.innerHTML = 'Too High';
  } else if (userValue < randomNumber) {
    message.innerHTML = 'Too Low';
  }
  turns == 0
    ? (userInputSubmit.disabled = true)
    : (userInputSubmit.disabled = false);
  if (userValue > randomNumber || userValue < randomNumber) {
    turnsRemaining.innerHTML = turns--;
  }
  console.log(turns);
}

function resetTheGame() {
  turns = 20;
  userInputSubmit.disabled = false;
  userGuess.disabled = false;
  //highScore.innerHTML = 0;
  turnsRemaining.innerHTML = 20;
  correctNumber.innerHTML = '?';
  userGuess.value = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}
