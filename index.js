// const square = document.querySelector('.square');
const body = document.querySelector('body');
const head = document.querySelector('h1');
const headCounter = document.querySelector('h1 .num');


let changes = [];



window.onresize = function(){
    // let w = square.offsetWidth;
    // let h = square.offsetHeight;
    // square.textContent = `${w} x ${h}`;
    headCounter.textContent = head.offsetHeight;
    

}