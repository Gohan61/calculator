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

operate("+", 1, 2);
