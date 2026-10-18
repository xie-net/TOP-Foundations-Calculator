function addition (num1, num2) {
    return num1 + num2;
};

function subtraction (num1, num2) {
    return num1 - num2;
};

function multiplication (num1, num2) {
    return num1 * num2;
};

function division (num1, num2) {
    return num1 / num2;
}

let num1 = "";
let num2 = "";
let operator = '';

const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");

buttons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        num1 += event.target.textContent;
        display.textContent = num1;
    }
})


function operate (num1, operator, num2) {
    switch (operator) {
        case '+':
            return addition(num1, num2);
            
        case '-':
            return subtraction(num1, num2);
            
        case '*':
            return multiplication(num1, num2);
            
        case '/':
            return division(num1, num2);
            
        default:
            return 'Invalid Syntax';

    };
}



// console.log(operate(10, '+', 5)); // 15
// console.log(operate(10, '-', 5)); // 5
// console.log(operate(10, '*', 5)); // 50
// console.log(operate(10, '/', 5)); // 2
// console.log(operate(10, '%', 5)); // "Invalid Syntax"