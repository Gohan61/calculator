//Variables
const calculatorContainer = document.createElement("div");
const operandsContainer = document.createElement("div");
const operatorContainer = document.createElement("div");
const operatortOperandContainer = document.createElement("div");
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
let numberBeforeOperator = "";

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
    button.addEventListener("click", function showOnDisplay() {
      switch (true) {
        case button.textContent.includes(1):
          displayCalculation.textContent += 1;
          numberBeforeOperator += "1";
          break;
        case button.textContent.includes(2):
          displayCalculation.textContent += 2;
          numberBeforeOperator += "2";
          break;
        case button.textContent.includes(3):
          displayCalculation.textContent += 3;
          numberBeforeOperator += "3";
          break;
        case button.textContent.includes(4):
          displayCalculation.textContent += 4;
          numberBeforeOperator += "4";
          break;
        case button.textContent.includes(5):
          displayCalculation.textContent += 5;
          numberBeforeOperator += "5";
          break;
        case button.textContent.includes(6):
          displayCalculation.textContent += 6;
          numberBeforeOperator += "6";
          break;
        case button.textContent.includes(7):
          displayCalculation.textContent += 7;
          numberBeforeOperator += "7";
          break;
        case button.textContent.includes(8):
          displayCalculation.textContent += 8;
          numberBeforeOperator += "8";
          break;
        case button.textContent.includes(9):
          displayCalculation.textContent += 9;
          numberBeforeOperator += "9";
          break;
      }
    });
  });
}

clearButton.addEventListener("click", function clearDisplay() {
  displayCalculation.textContent = "";
});

addButton.addEventListener("click", () => {
  displayCalculation.textContent += "+";
});

subtractButton.addEventListener(
  "click",
  () => (displayCalculation.textContent += "-")
);

multiplyButton.addEventListener(
  "click",
  () => (displayCalculation.textContent += "*")
);

divideButton.addEventListener(
  "click",
  () => (displayCalculation.textContent += "/")
);

equalsButton.addEventListener(
  "click",
  operate(operator, firstOperand, secondOperand)
);

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
calculatorContainer.append(operatortOperandContainer);
operatortOperandContainer.append(operandsContainer, operatorContainer);
operatortOperandContainer.setAttribute("class", "container");
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
calculatorContainer.prepend(displayCalculation);
