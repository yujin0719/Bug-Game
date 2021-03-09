'use strict';
const rightSound = new Audio('sound/right.mp3');
const wrongSound = new Audio('sound/wrong.mp3');
const winSound = new Audio('sound/win.mp3');
const loseSound = new Audio('sound/lose.mp3');
const bgSound = new Audio('sound/background.mp3');

export function playRight(){
    playSound(rightSound);
}
export function playWrong(){
    playSound(wrongSound);
}
export function playWin(){
    playSound(winSound);
}
export function playLose(){
    playSound(loseSound);
}
export function playBackground(){
    playSound(bgSound);
}
export function stopBackground(){
    stopSound(bgSound);
}
function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}
function stopSound(sound){
    sound.pause();
}