'use strict';
import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';

const MAX = 6;
const MIN = 2;
const BUG = ['ladyBug', 'larva', 'littleDeep', 'snail', 'spider'];
const GAME_DURATION_SEC = 7;

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.timer');
const gameScore = document.querySelector('.score');
const gameAnswer = document.querySelector('.game__select');

let score = 0;
let timer = undefined;
let bugType = undefined;
let bugcnt = 0;
let started = false;

const field = new Field(MAX,MIN);
field.setClickListener(onItemClick);

const popUp = new PopUp();
popUp.setClickListener(() => {
  startGame();
});

gameBtn.addEventListener('click', () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});

function startGame() {
  started = true;
  initGame();
  changeBtn();
  showTimerAndScore();
  startGameTimer();
  sound.playBackground();
}
function stopGame() {
  started = false;
  changeBtn();
  stopGameTimer();
  popUp.showWithText('REPLAY ?');
  sound.playLose();
  sound.stopBackground();
}
function finishGame(win) {
  started = false;
  if (win) {
    sound.playWin();
  } else {
    sound.playWrong();
  }
  sound.stopBackground();
  stopGameTimer();
  popUp.showWithText(win ? '✨YOU WON✨' : '☠️YOU LOST☠️');
}
function showTimerAndScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}
function updateScoreBoard() {
  gameScore.innerText = bugcnt - score;
}
function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(bugcnt === score);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}
function stopGameTimer() {
  clearInterval(timer);
}
function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}
function changeBtn() {
  if (gameBtn.firstElementChild.className === 'fas fa-play' && started) {
    gameBtn.firstElementChild.className = 'fas fa-stop';
  } else if (!started) {
    gameBtn.firstElementChild.className = 'fas fa-play';
  }
}
function onItemClick(item){
  if (!started) {
    return;
  }
  if (item === bugType) {
    score++;
    updateScoreBoard();
    if (score === bugcnt) {
      finishGame(true);
    }
  } else if (BUG.includes(item)) {
    finishGame(false);
  }
};
function initGame() {
  score = 0;
  bugType = selectBug();
  gameAnswer.innerHTML = `<img src="img/${bugType}.png" alt="">`;
  bugcnt = field.init(bugType);
  gameScore.innerText = bugcnt;
}
function selectBug() {
  return BUG[Math.floor(randomNumber(0, 5))];
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
