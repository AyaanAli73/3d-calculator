let currentExpression = '';

function appendNumber(number) {
  currentExpression += number;
  document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
  currentExpression += operator;
  document.getElementById('result').value = currentExpression;
}

function clearScreen() {
  currentExpression = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const result = eval(currentExpression);
    document.getElementById('result').value = result;
    currentExpression = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
    currentExpression = '';
  }
}
