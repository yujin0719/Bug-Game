'use strict';
import * as sound from './sound.js';

const BUG_SIZE = 50;
const BUGS = ['ladyBug', 'larva', 'littleDeep', 'snail', 'spider'];

export default class Field {
  constructor(maxCount, minCount) {
    this.max = maxCount;
    this.min = minCount;
    this.bugType = undefined;
    this.bugCnt = undefined;
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', this.onClick);
  }
  init(bugType) {
    this.bugType = bugType;
    this.field.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const rand = Math.floor(randomNumber(this.min, this.max));
      this.addItem(BUGS[i], rand, `img/${BUGS[i]}.png`);
      if (BUGS[i] === this.bugType) {
        this.bugCnt = rand;
      }
    }
    return this.bugCnt;
  }
  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }
  addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - BUG_SIZE;
    const y2 = this.fieldRect.height - BUG_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }
  onClick = (event) => {
    const target = event.target;
    if (target.className === this.bugType) {
      target.remove();
      sound.playRight();
      this.onItemClick && this.onItemClick(target.className);
    } else if (BUGS.includes(target.className)) {
      this.onItemClick && this.onItemClick(target.className);
    }
  };
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
