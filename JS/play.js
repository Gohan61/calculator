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
let numbersInCalculator = [];
let temporaryResult = "";

//Operator functions
function add(firstOperand, secondOperand) {
  temporaryResult = (Number(firstOperand) + Number(secondOperand)).toFixed(2);
  displayCalculation.textContent = temporaryResult;
  numbersInCalculator.splice(0, 2, temporaryResult);
}

function subtract(firstOperand, secondOperand) {
  temporaryResult = Number(firstOperand) - Number(secondOperand);
  Number(temporaryResult).toFixed(2);
  displayCalculation.textContent = temporaryResult;
  numbersInCalculator.splice(0, 2, temporaryResult);
}

function multiply(firstOperand, secondOperand) {
  temporaryResult = Number(firstOperand) * Number(secondOperand);
  Number(temporaryResult).toFixed(2);
  displayCalculation.textContent = temporaryResult;
  numbersInCalculator.splice(0, 2, temporaryResult);
}

function divide(firstOperand, secondOperand) {
  if (secondOperand === "0") {
    displayCalculation.textContent = "Can't divide by zero";
  } else {
    temporaryResult = Number(firstOperand) / Number(secondOperand);
    Number(temporaryResult).toFixed(2);
    displayCalculation.textContent = temporaryResult;
    numbersInCalculator.splice(0, 2, temporaryResult);
  }
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
for (let i = 0; i < 10; i++) {
  const operandButtons = [];
  operandButtons.push(document.createElement("button"));

  operandButtons.forEach((button) => {
    button.setAttribute("class", "operands");
    button.textContent = `${i}`;
    operandsContainer.appendChild(button);
    button.addEventListener("click", function showOnDisplay() {
      switch (true) {
        case button.textContent.includes(0):
          displayCalculation.textContent += 0;
          numberBeforeOperator += 0;
          break;
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

const dotOperand = document.createElement("button");
dotOperand.setAttribute("class", "operands");
dotOperand.textContent = ".";
dotOperand.addEventListener("click", function showOnDisplay() {
  if (numberBeforeOperator.includes(".")) {
    return;
  } else {
    displayCalculation.textContent += ".";
    numberBeforeOperator += ".";
  }
});
operandsContainer.appendChild(dotOperand);

clearButton.addEventListener("click", function clearDisplay() {
  displayCalculation.textContent = "";
  numberBeforeOperator = "";
  operator = "";
  numbersInCalculator = [];
  temporaryResult = "";
});

addButton.addEventListener("click", () => {
  if (temporaryResult === "" && numbersInCalculator.length === 0) {
    numbersInCalculator.push(numberBeforeOperator);
    numberBeforeOperator = "";
    displayCalculation.textContent += "+";
  } else if (temporaryResult !== "" && numbersInCalculator.length === 1) {
    numbersInCalculator.push(numberBeforeOperator);
    operate(operator, numbersInCalculator[0], numbersInCalculator[1]);
    numberBeforeOperator = "";
  } else if (numbersInCalculator.length === 1) {
    numbersInCalculator.push(numberBeforeOperator);
    operate(operator, numbersInCalculator[0], numbersInCalculator[1]);
    numberBeforeOperator = "";
  }
  operator = "+";
});

subtractButton.addEventListener("click", () => {
  if (temporaryResult === "" && numbersInCalculator.length === 0) {
    numbersInCalculator.push(numberBeforeOperator);
    numberBeforeOperator = "";
  } else if (temporaryResult !== "" && numbersInCalculator.length === 1) {
    numbersInCalculator.push(numberBeforeOperator);
    operate(operator, numbersInCalculator[0], numbersInCalculator[1]);
    numberBeforeOperator = "";
  } else if (numbersInCalculator.length === 1) {
    numbersInCalculator.push(numberBeforeOperator);
    operate(operator, numbersInCalculator[0], numbersInCalculator[1]);
    numberBeforeOperator = "";
  }
  operator = "-";
});

multiplyButton.addEventListener("click", () => {
  if (temporaryResult === "" && numbersInCalculator.length === 0) {
    numbersInCalculator.push(numberBeforeOperator);
    numberBeforeOperator = "";
  } else if (temporaryResult !== "" && numbersInCalculator.length === 1) {
    numbersInCalculator.push(numberBeforeOperator);
    operate(operator, numbersInCalculator[0], numbersInCalculator[1]);
    numberBeforeOperator = "";
  } else if (numbersInCalculator.length === 1) {
    numbersInCalculator.push(numberBeforeOperator);
    operate(operator, numbersInCalculator[0], numbersInCalculator[1]);
    numberBeforeOperator = "";
  }
  operator = "*";
});

divideButton.addEventListener("click", () => {
  if (temporaryResult === "" && numbersInCalculator.length === 0) {
    numbersInCalculator.push(numberBeforeOperator);
    numberBeforeOperator = "";
  } else if (temporaryResult !== "" && numbersInCalculator.length === 1) {
    numbersInCalculator.push(numberBeforeOperator);
    operate(operator, numbersInCalculator[0], numbersInCalculator[1]);
    numberBeforeOperator = "";
  } else if (numbersInCalculator.length === 1) {
    numbersInCalculator.push(numberBeforeOperator);
    operate(operator, numbersInCalculator[0], numbersInCalculator[1]);
    numberBeforeOperator = "";
  }
  operator = "/";
});

equalsButton.addEventListener("click", () => {
  numbersInCalculator.push(numberBeforeOperator);
  operate(operator, numbersInCalculator[0], numbersInCalculator[1]);
  numberBeforeOperator = "";
});

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
