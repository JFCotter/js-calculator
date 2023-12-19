// CALCULATOR OBJECT
const calculator = {
  currentOperand: "",
  previousOperand: "",
  operator: null,
}
// REFRESH DISPLAY
function updateDisplay() {
  document.querySelector("[data-current-operand]").innerText = calculator.currentOperand;
  document.querySelector("[data-previous-operand]").innerText = calculator.previousOperand;
}
//DETECT WHEN CLEAR BUTTON IS PUSHED
document.querySelector("[data-clear]").addEventListener(
  "click", clearCalculator)
//CLEAR CALCULATOR
function clearCalculator() {
  calculator.currentOperand = "";
  calculator.previousOperand = "";
  calculator.operator = null;
  updateDisplay()
}
//DETECT WHEN CLEAR BUTTON IS PUSHED
document.querySelector("[data-delete]").addEventListener(
  "click", deleteCurrentOperand)
//DELETE LAST INTERGER OF CURRENT OPERAND
function deleteCurrentOperand() {
  calculator.currentOperand = calculator.currentOperand.slice(0, -1);
  updateDisplay()
}
//DETECT WHEN NUMBER BUTTON IS PUSHED
document.querySelectorAll("[data-number]").forEach(
  (numberButton) => numberButton.addEventListener(
    "click", addDigit))

//APPEND NUMBER TO CURRENT OPERAND
function addDigit(e) {
  const digit = e.target.getAttribute("data-number")
  //Maximum of one decimal point
  if (digit === "." && calculator.currentOperand.includes(".")) return
  //Append digit pressed
  calculator.currentOperand += digit
  updateDisplay()

  //  calculator.currentOperand = currentOperand === '0' ? digit : currentOperand += digit;
}


//DETECT WHEN OPERATOR IS SELECTED
document.querySelectorAll("[data-operator]").forEach(
  (operatorButton) => operatorButton.addEventListener(
    "click", chooseOperator
  )
)
function chooseOperator(e) {
  calculator.operator = e.target.getAttribute("data-operator")
  calculator.previousOperand = calculator.currentOperand + e.target.getAttribute("data-operator")
  calculator.currentOperand = ""
  updateDisplay()
}
//DETECT WHEN ANSWER BUTTON IS SELECTED
document.querySelector("[data-equals]").addEventListener(
  "click", calculate)
//CALCULATE
function calculate(answer) {
  const previous = parseFloat(calculator.previousOperand)
  const current = parseFloat(calculator.currentOperand)
  switch (calculator.operator) {
    case "+":
      answer = previous + current
      break
    case "-":
      answer = previous - current
      break
    case "*":
      answer = previous * current
      break
    case "/":
      answer = previous / current
      break
    default: return
  }
  calculator.currentOperand = answer
  calculator.previousOperand = ""
  calculator.operator = null
  updateDisplay()
}