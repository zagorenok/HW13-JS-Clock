'use strict'

class Clock {
  constructor(nodeElem) {
    this.nodeElem = nodeElem;
    this.formatFull = true;
    nodeElem.addEventListener('click', () => {
      this.formatFull = !this.formatFull;
      this.render();
    });
  }
    render () {
    let time = '';
    let date = new Date();
    let hours = date.getHours();

    if (hours < 10) {
        hours = '0' + hours;
    }

    let minutes = date.getMinutes();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    let seconds = date.getSeconds();

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (this.formatFull) {
        time = `${hours}:${minutes}:${seconds}`;
    } else {
        time = `${hours}:${minutes}`;
    }

    this.nodeElem.innerHTML = time;  
    }
  
    start () {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }

    stop () {
      clearInterval(this.timer);
    }
  
    setFormat (format = 'full') {
      this.formatFull = format === 'short' ? false : true;
    }
}

const clock = new Clock(document.querySelector('#clock1'));
const clock2 = new Clock(document.querySelector('#clock2'));

clock.start();

clock2.setFormat('short');
clock2.start();












