const $display__number = document.getElementById('display__number');
const $display = document.getElementById('display');
const $reset = document.getElementById('reset');
const $equal = document.getElementById('equal');
const $dot = document.getElementById('dot');
const $zero = document.getElementById('zero');
const $slash = document.getElementById('slash');
const $multiplier = document.getElementById('multiplier');
const $one = document.getElementById('one');
const $two = document.getElementById('two');
const $three = document.getElementById('three');
const $rest = document.getElementById('rest');
const $four = document.getElementById('four');
const $five = document.getElementById('five');
const $six = document.getElementById('six');
const $sum = document.getElementById('sum');
const $seven = document.getElementById('seven');
const $eight = document.getElementById('eight');
const $nine = document.getElementById('nine');
const $del = document.getElementById('del');
const $buttonh = document.getElementById('buttonh');
const $buttoncircle = document.getElementById('button__circle');
const $header = document.getElementById('header');
const $keyboard = document.getElementById('keyboard');
const $body = document.getElementById('body');
const $allButtons = document.getElementsByClassName('allButtons');

// cambio de temas //
actualTheme = 1;

$buttonh.addEventListener('click', () => {
    if(actualTheme === 1) {
        actualTheme += 1;
        $buttonh.classList.remove("buttonh-left");
        $buttonh.classList.add('buttonh-center');
        $buttonh.classList.remove('keyboard-left');
        $buttonh.classList.add('keyboard-center');
        $buttoncircle.classList.remove('circle-left');
        $buttoncircle.classList.add('circle-center');
        $header.classList.remove('header-left');
        $header.classList.add('header-center');
        $display__number.classList.remove('header-left');
        $display__number.classList.add('header-center');
        $keyboard.classList.remove('keyboard-left');
        $keyboard.classList.add('keyboard-center');
        $body.classList.remove('body-left');
        $body.classList.add('body-center');
        $del.classList.remove('reset-left');
        $del.classList.add('reset-center');
        $del.classList.remove('dot-left');
        $del.classList.add('dot-center');
        $reset.classList.remove('reset-left');
        $reset.classList.add('reset-center');
        $display.classList.remove('display-left');
        $display.classList.add('display-center');
        $equal.classList.remove('equal-left');
        $equal.classList.add('equal-center');
        for($allButton of $allButtons){
            $allButton.classList.remove("button-left");
            $allButton.classList.add("button-center"); 
        }
    } else if(actualTheme === 2) {
        actualTheme += 1;
        $buttonh.classList.remove("buttonh-center");
        $buttonh.classList.add('buttonh-right');
        $buttonh.classList.remove('keyboard-center');
        $buttonh.classList.add('keyboard-right');
        $buttoncircle.classList.remove('circle-center');
        $buttoncircle.classList.add('circle-right');
        $header.classList.remove('header-center');
        $header.classList.add('header-right');
        $display__number.classList.remove('header-center');
        $display__number.classList.add('header-right');
        $keyboard.classList.remove('keyboard-center');
        $keyboard.classList.add('keyboard-right');
        $body.classList.remove('body-center');
        $body.classList.add('body-right');
        $del.classList.remove('reset-center');
        $del.classList.add('reset-right');
        $del.classList.remove('dot-center');
        $del.classList.add('dot-right');
        $reset.classList.remove('reset-center');
        $reset.classList.add('reset-right');
        $display.classList.remove('display-center');
        $display.classList.add('display-right');
        $equal.classList.remove('equal-center');
        $equal.classList.add('equal-right');
        for($allButton of $allButtons){
            $allButton.classList.remove("button-center");
            $allButton.classList.add("button-right"); 
        }
    } else {
        actualTheme = 1;
        $buttonh.classList.remove('buttonh-right');
        $buttonh.classList.add('buttonh-left');
        $buttonh.classList.remove('keyboard-right');
        $buttonh.classList.add('keyboard-left');
        $buttoncircle.classList.remove('circle-right');
        $buttoncircle.classList.add('circle-left');
        $header.classList.remove('header-right');
        $header.classList.add('header-left');
        $display__number.classList.remove('header-right');
        $display__number.classList.add('header-left');
        $keyboard.classList.remove('keyboard-right');
        $keyboard.classList.add('keyboard-left');
        $body.classList.remove('body-right');
        $body.classList.add('body-left');
        $del.classList.remove('reset-right');
        $del.classList.add('reset-left');
        $del.classList.remove('dot-right');
        $del.classList.add('dot-left');
        $reset.classList.remove('reset-right');
        $reset.classList.add('reset-left');
        $display.classList.remove('display-right');
        $display.classList.add('display-left');
        $equal.classList.remove('equal-right');
        $equal.classList.add('equal-left');
        for($allButton of $allButtons){
            $allButton.classList.remove("button-right");
            $allButton.classList.add("button-left"); 
        }
    }
})

// operaciones //

let dotset = false;
let actualNumbers = "";

$dot.addEventListener('click', () => {
    if(dotset === true) {
    } else {
    addDigits(".");
    dotset = true;
    }
})

$slash.addEventListener('click', () => {
    addDigits("/");
    dotset = false;
})

$multiplier.addEventListener('click', () => {
    addDigits("*");
    dotset = false;
})

$rest.addEventListener('click', () => {
    addDigits("-");
    dotset = false;
})

$sum.addEventListener('click', () => {
    addDigits("+");
    dotset = false;
})

$zero.addEventListener('click', () => {
    addDigits(0);
})

$one.addEventListener('click', () => {
    addDigits(1);
})

$two.addEventListener('click', () => {
    addDigits(2);
})

$three.addEventListener('click', () => {
    addDigits(3);
})

$four.addEventListener('click', () => {
    addDigits(4);
})

$five.addEventListener('click', () => {
    addDigits(5);
})

$six.addEventListener('click', () => {
    addDigits(6);
})

$seven.addEventListener('click', () => {
    addDigits(7);
})

$eight.addEventListener('click', () => {
    addDigits(8);
})

$nine.addEventListener('click', () => {
    addDigits(9);
})

$reset.addEventListener('click', () => {
    $display__number.textContent = 0;
    dotset = false;
})

const deleteLast = () => {
    if($display__number.textContent[$display__number.textContent.length - 1] === "."){
        dotset = false;
    } 
    if($display__number.textContent[$display__number.textContent.length - 1] === "+" || $display__number.textContent[$display__number.textContent.length - 1] === "-" || $display__number.textContent[$display__number.textContent.length - 1] === "/" || $display__number.textContent[$display__number.textContent.length - 1] === "*") {
        comprobeDot();
    }
    for(let i = 0; i<$display__number.textContent.length - 1;i++){
        actualNumbers = actualNumbers + $display__number.textContent[i];
    }
    $display__number.textContent = actualNumbers;
    actualNumbers = "";
}

$del.addEventListener('click', deleteLast);

const comprobeDot = () => {
    const actualEvaluation = $display__number.textContent.slice(0, -1).split("").reverse().join("");
    let numberSum = actualEvaluation.indexOf("+");
    let numberRest = actualEvaluation.indexOf("-");
    let numberMultiplier = actualEvaluation.indexOf("*");
    let numberSlash = actualEvaluation.indexOf("/");
    if(numberSum === -1) {
        numberSum = 2500;
    }
    if(numberRest === -1) {
        numberRest = 2500;
    }
    if(numberMultiplier === -1) {
        numberMultiplier = 2500;
    } 
    if(numberSlash === -1) {
        numberSlash = 2500;
    }

    let lastOperation = 0;
    if(numberSum < numberRest && numberSum < numberMultiplier && numberSum < numberSlash) {
        lastOperation = numberSum;
    } else if (numberRest < numberSum && numberRest < numberMultiplier && numberRest < numberSlash) {
        lastOperation = numberRest;
    } else if(numberMultiplier < numberSum && numberMultiplier < numberRest && numberMultiplier < numberSlash) {
        lastOperation = numberMultiplier;
    } else if(numberSlash < numberSum && numberSlash < numberRest && numberSlash < numberMultiplier) {
        lastOperation = numberSlash;
    } else {
        lastOperation = 2500;
    }
    
    let numberDot = actualEvaluation.indexOf(".");
    if(lastOperation > numberDot) {
        dotset = true;
    } else if(lastOperation === 2500 && numberDot !== -1) {
        dotset = true;
    }
}

$equal.addEventListener('click', () => {
    $display__number.textContent = eval($display__number.textContent);
    let dotResult = $display__number.textContent.indexOf(".");
    if(dotResult !== -1) {
        dotset = true;
    } else {
        dotset = false;
    }
})

const addDigits = (e) => {
    if($display__number.textContent === "0") {
        if (e >= 0 && e < 10) {
            $display__number.textContent = e;
        } else if (e === ".") {
            $display__number.textContent = $display__number.textContent + e;
        }
    } else if(e >= 0 && e < 10 ) {
        $display__number.textContent = $display__number.textContent + e;
    } else if(!Number.isInteger(parseInt($display__number.textContent[$display__number.textContent.length - 1]))) {
    } else {
        $display__number.textContent = $display__number.textContent + e;
    } 
}