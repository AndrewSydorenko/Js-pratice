'use strict'
import '../css/common.css';


const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        bodyEl.style.background = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
