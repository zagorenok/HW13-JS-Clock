'use strict'

function Clock (nodeElem) {
  this.nodeElem = nodeElem;
  this.formatFull = true;
  nodeElem.addEventListener('click', () => {
    this.formatFull = !this.formatFull;
    this.render();
  });
}
  Clock.prototype.render = function () {
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

  Clock.prototype.start = function () {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  Clock.prototype.stop = function () {
    clearInterval(this.timer);
  }

  Clock.prototype.setFormat = function (format = 'full') {
    this.formatFull = format === 'short' ? false : true;
  }

  function Watch (nodeElem) {
    Clock.call(this, nodeElem);
  }

  Watch.prototype = Object.create(Clock.prototype);
  Watch.prototype.constructor = Watch;
  Watch.prototype.render = function () {
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
        time = `${hours}/${minutes}/${seconds}`;
    } else {
        time = `${hours}/${minutes}`;
    }
    this.nodeElem.innerHTML = time;  
}
  
function Timing (nodeElem) {
  Clock.call(this, nodeElem);
}

  Timing.prototype = Object.create(Clock.prototype);
  Timing.prototype.constructor = Timing;
  Timing.prototype.render = function () {
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
        time = `${hours}-${minutes}-${seconds}`;
    } else {
        time = `${hours}-${minutes}`;
    }
    this.nodeElem.innerHTML = time;  
}

const clock = new Clock(document.querySelector('#clock1'));
const clock2 = new Clock(document.querySelector('#clock2'));
clock.start();
clock2.setFormat('short');
clock2.start();

const watch = new Watch(document.querySelector('#clock3'));
const watch2 = new Watch(document.querySelector('#clock4'));
watch.start();
watch2.setFormat('short');
watch2.start();

const timing = new Timing(document.querySelector('#clock5'));
const timing2 = new Timing(document.querySelector('#clock6'));
timing.start();
timing2.setFormat('short');
timing2.start();















