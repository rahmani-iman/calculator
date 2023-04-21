let display = document.querySelector(".display");
let list = document.querySelectorAll(".show-display");
function showDisplay(event) {
    const x = event.target.innerText;
    if (display.innerHTML == 0) {
        return display.innerHTML = x
    } else {
        return display.innerHTML += x
    };
}
list.forEach(item => {
    item.addEventListener("click", showDisplay)
});

const calculate = document.querySelector(".calculate");
function myCalculate(event) {
    let result = display.innerText;
    display.innerText = eval(result)
}
calculate.addEventListener("click", myCalculate);

const allClear = document.querySelector(".all-clear");
function myAllClear() {
    display.innerHTML = 0;  
}
allClear.addEventListener("click", myAllClear);

const clear = document.querySelector(".clear-last");
function myClear() {
    let text = display.innerText;
    if (text.length === 1) {
       return display.innerText = 0
    } else {
        return display.innerText = text.substring(0, text.length - 1)
    };
}
clear.addEventListener("click", myClear);
