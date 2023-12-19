// CALCULATOR OBJECT
const calculator = {
  currentOperand: "0",
  previousOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};
// REFRESH DISPLAY
function updateDisplay() {
  const bottomDisplay = document.querySelector("[data-current-operand]");
  bottomDisplay.innerText = calculator.currentOperand;
  const topDisplay = document.querySelector("[data-previous-operand]")
  topDisplay.innerText = calculator.previousOperand
}

//DETECT WHEN NUMBER BUTTON IS PUSHED
document.querySelectorAll("[data-number]").forEach(
  (numberButton) => numberButton.addEventListener(
    "click", () => calculator.currentOperand.addDigit(numberButton.innerText)
)
)

//APPEND NUMBER TO CURRENT OPERAND
function addDigit() {
  //Maximum of one decimal point
  if (digit === "." && calculator.currentOperand.includes(".")) return
  //
    calculator.currentOperand = currentOperand === '0' ? digit : currentOperand + digit;
  }


//DETECT WHEN OPERATOR IS SELECTED

//MOVE CURRENT OPERAND TO PREVIOUS OPERAND, SET "WAITING FOR SECOND OPERAND TO TRUE"


//CALCULATE
function calculate(previousOperand, currentOperand, operator) {
  if (operator === "+") {
    return previousOperand + currentOperand;
  } else if (operator === "-") {
    return previousOperand - currentOperand;
  } else if (operator === "&times") {
    return previousOperand * currentOperand;
  } else if (operator === "&divide") {
    return previousOperand / currentOperand;
  }

  return currentOperand;
}

//CLEAR CALCULATOR
function clearCalculator() {
  calculator.currentOperand = "0";
  calculator.previousOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}
//DELETE