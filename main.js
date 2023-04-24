class Calculator {
    constructor(oldDisplay, newDisplay) {
        //this.oldDisplay = oldDisplay;
        //this.newDisplay = newDisplay;
        //this.clear();
    }
}

//--------lots of declarations----------------
let numButtons = document.querySelectorAll("[numberbtn]");
let additon = document.querySelector("[numberbtn]");
let subtraction = document.querySelector("[numberbtn]");
let screen = document.querySelector('[screen]');
let clearBtn = document.querySelector('#clearBtn')
let equalBtn = document.querySelector('#equalBtn')
let paraBtn = document.querySelector('#paraBtn')


//----------------reusable funcitons--------------
let clear = function() {
    screen.value = '0'
}

var calculate = function(formula) {
    var result = eval(formula);
    screen.value = result
 }

//-------------------Button Listeners-------------------------
screen.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        console.log(screen.value)
        calculate(screen.value)
    }
})
clearBtn.addEventListener('click', () => {
    clear();
})

equalBtn.addEventListener('click', () => {
    calculate(screen.value)
})

decimalBtn.addEventListener('click', () => {

})

//paranthases button will dynamically check if an opening para has been used
//     //if it has, the same button will close the parathases 
//I was happy about this but then I thought of a better way to do it 

// paraBtn.addEventListener('click', () => {
//     var open = /[(]/g
//     var closed = /[)]/g
    
//     if (screen.value === '0'){
//         screen.value = '(' 
//         console.log('1')
//     } else if(screen.value.match(closed) === null && screen.value[screen.value.length-1] !== '('){
//         screen.value += ')'
//         console.log('2')
//     } else if (screen.value.match(closed).length === screen.value.match(open).length && screen.value[screen.value.length-1] !== '(') {
//         screen.value += '('
//         console.log('3')
//     } else if (screen.value.match(closed).length < screen.value.match(open).length && screen.value[screen.value - 1] !== '(') {
//         screen.value += ')'
//     }
// })
          
numButtons.forEach(button => {
    console.log("working")
    button.addEventListener('click', () => {
        if (screen.value === '0') {
            screen.value = button.innerText;
        } else {
        screen.value += button.innerText;
        }
    })
})

