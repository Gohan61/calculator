const calculatorContainer = document.createElement("div");
let firstOperand = 0;
let secondOperand = 0;
let operator = "";

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

for (let i = 0; i < 10; i++) {
  const operandButtons = [];
  operandButtons.push(document.createElement("button"));

  operandButtons.forEach((button) => {
    button.setAttribute("class", "operands");
    button.textContent = `${i}`;
    calculatorContainer.appendChild(button);
  });
}

document.body.appendChild(calculatorContainer);
