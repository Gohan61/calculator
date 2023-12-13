//Variables
const calculatorContainer = document.createElement("div");
const operandsContainer = document.createElement("div");
const operatorContainer = document.createElement("div");
let firstOperand = 0;
let secondOperand = 0;
let operator = "";
const addButton = document.createElement("button");
const subtractButton = document.createElement("button");
const multiplyButton = document.createElement("button");
const divideButton = document.createElement("button");
const equalsButton = document.createElement("button");
const clearButton = document.createElement("button");
const displayCalculation = document.createElement("div");

//Operator functions
function add(...numbers) {
  console.log(numbers.reduce((a, b) => a + b));
}

function subtract(...numbers) {
  console.log(numbers.reduce((a, b) => a - b));
}

function multiply(...numbers) {
  console.log(numbers.reduce((a, b) => a * b));
}

function divide(...numbers) {
  console.log(numbers.reduce((a, b) => a / b));
}

//Calculate fucntion
function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case "+":
      add(firstOperand, secondOperand);
      break;
    case "-":
      subtract(firstOperand, secondOperand);
      break;
    case "*":
      multiply(firstOperand, secondOperand);
      break;
    case "/":
      divide(firstOperand, secondOperand);
      break;
  }
}

//Buttons for operands + operators
for (let i = 1; i < 10; i++) {
  const operandButtons = [];
  operandButtons.push(document.createElement("button"));

  operandButtons.forEach((button) => {
    button.setAttribute("class", "operands");
    button.textContent = `${i}`;
    operandsContainer.appendChild(button);
  });
}

addButton.textContent = "+";
subtractButton.textContent = "-";
multiplyButton.textContent = "*";
divideButton.textContent = "/";
equalsButton.textContent = "=";
clearButton.textContent = "Clear";

[
  addButton,
  subtractButton,
  multiplyButton,
  divideButton,
  equalsButton,
  clearButton,
].forEach((el) => el.setAttribute("class", "operators"));

//Append to body
calculatorContainer.setAttribute("class", "container");
document.body.appendChild(calculatorContainer);
calculatorContainer.append(operandsContainer, operatorContainer);
operandsContainer.setAttribute("class", "operandsContainer");
operatorContainer.setAttribute("class", "operatorContainer");

operatorContainer.append(
  addButton,
  subtractButton,
  multiplyButton,
  divideButton,
  equalsButton,
  clearButton
);

displayCalculation.setAttribute("class", "display");
calculatorContainer.appendChild(displayCalculation);
