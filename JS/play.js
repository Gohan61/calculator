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
