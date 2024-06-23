const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '0';
let operator = null;
let previousOperand = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.dataset.number || button.dataset.operator || button.dataset.clear;

    if (buttonValue === 'C') {
      clearDisplay();
    } else if (buttonValue === '=') {
      calculateResult();
    } else if (['+', '-', '*', '/', '%', '^'].includes(buttonValue)) {
      handleOperator(buttonValue);
    } else {
      handleNumber(buttonValue);
    }
  });
});

function handleNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function handleOperator(op) {
  operator = op;
  previousOperand = currentInput;
  currentInput = '0';
  updateDisplay();
}

function calculateResult() {
  const currentOperand = currentInput;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(previousOperand) + parseFloat(currentOperand);
      break;
    case '-':
      result = parseFloat(previousOperand) - parseFloat(currentOperand);
      break;
    case '*':
      result = parseFloat(previousOperand) * parseFloat(currentOperand);
      break;
    case '/':
      if (currentOperand === '0') {
        alert('Cannot divide by zero!');
        return;
      }
      result = parseFloat(previousOperand) / parseFloat(currentOperand);
      break;
    case '%':
      result = parseFloat(previousOperand) % parseFloat(currentOperand); 
      break; // Modulo operation
    case '^':
      result = Math.pow(parseFloat(previousOperand), parseFloat(currentOperand)); 
      break; // Exponentiation operation
    default:
      result = currentInput;
  }

  currentInput = result.toString();
  operator = null;
  previousOperand = null;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  operator = null;
  previousOperand = null;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput;
}