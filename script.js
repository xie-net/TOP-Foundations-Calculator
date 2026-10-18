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
let operator = "";
let justCalculated = false;

const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");

buttons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {

        if (event.target.classList.contains("operator")) {
                if (num1 !== "") {
                    operator = event.target.textContent;
                    justCalculated = false;
                } else {
                    display.textContent = "Enter a number first";
                }

        } else if (event.target.classList.contains("equals")) {
          if (num1 !== "" && operator !== "" && num2 !== "") {
            result = operate(Number(num1), operator, Number(num2));
            display.textContent = result;
            num1 = String(result);
            num2 = "";
            operator = "";
            justCalculated = true;
          } else {
             display.textContent = "Incomplete expression";
          }

        } else if (event.target.classList.contains("clear")) {
            display.textContent = "0";
            num1 = "";
            num2 = "";
            operator = "";
            justCalculated = false;

        } else {
            // A number button was clicked
            if (justCalculated) {
                num1 = "";
                justCalculated = false;
            }

            if (operator === "") {
                num1 += event.target.textContent;
                display.textContent = num1;
            } else {
                num2 += event.target.textContent;
                display.textContent = num2;
            }
        }
    }
});


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