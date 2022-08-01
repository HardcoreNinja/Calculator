
let number1 = null, number2 = null;
let calculate = false;
let textNode = ""
let operator = "", oldOperator = "";

function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}
function add(a, b) {
    return a + b;
}

function updateNumbers() {
    const numberContainer = document.querySelector("#numberContainer");

    while (numberContainer.firstChild)
        numberContainer.firstChild.remove();

    textNode += this.getAttribute("id");

    numberContainer.append(textNode);

    if(number1 === null)
     number1 = parseFloat(textNode);

     if(number2 === null)
     number2 = parseFloat(textNode);
}

function updateOperators() {


    if (number1 !== null && number2 !== null) {
        if (operator === "÷")
            number1 = divide(number1, number2);
        else if (operator === "x")
            number1 = multiply(number1, number2);
        else if (operator === "-")
            number1 = subtract(number1, number2);
        else if (operator === "+")
            number1 = add(number1, number2);
        else if(operator === "=")
        {
            if (oldOperator === "÷")
            number1 = divide(number1, number2);
        else if (oldOperator === "x")
            number1 = multiply(number1, number2);
        else if (oldOperator === "-")
            number1 = subtract(number1, number2);
        else if (oldOperator === "+")
            number1 = add(number1, number2);

            oldOperator = "";
        }

        const numberContainer = document.querySelector("#numberContainer");

        while (numberContainer.firstChild)
            numberContainer.firstChild.remove();

        textNode = number1;

        numberContainer.append(textNode);

        number2 = null;
    }

    const operatorContainer = document.querySelector("#operatorContainer");

    while (operatorContainer.firstChild)
        operatorContainer.firstChild.remove();

    if(this.getAttribute("id") === "=")
    oldOperator = operator;

    operator = this.getAttribute("id");

    operatorContainer.append(operator);

    textNode = "";
}

function addListeners() {
    const numberButtons = document.querySelectorAll(".buttonStyle.number");
    numberButtons.forEach(button => button.addEventListener("mousedown", updateNumbers));

    const operatorButtons = document.querySelectorAll(".buttonStyle.operator");
    operatorButtons.forEach(button => button.addEventListener("mousedown", updateOperators));
}

window.onload = addListeners();