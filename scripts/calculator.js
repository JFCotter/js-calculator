// CALCULATOR

"use strict";

//CONSTANTS
// const calculator = {
//   displayValue: "0",
// };

// const previousOperand = document.querySelector("[data-previousOperand]");
// const currentOperand = document.querySelector("[data-currentOperand]");
// const numberButtons = document.querySelectorAll("[data-number]");
// const operatorButtons = document.querySelectorAll("[data-operator]");
// const deleteButton = document.querySelector("[data-delete]");
// const clearButton = document.querySelector("[data-clear]");
// const equalsButton = document.querySelector("[data-equals]");

// FUNCTIONS

// function updateDisplay() {
//   currentOperand.innerText = calculator.displayValue;
// }

// updateDisplay();





/* Ben started ruining it hereinafter... */

const getValidOperandChar_OrNothing = (operandChar) => 
  "0123456789.".includes(operandChar) ? operandChar : ""
;

const primaryOperand = {
  element   : document.querySelector("[data-primary-operand]"),
  addDigit  : (newDigit) => primaryOperand.element.innerText += getValidOperandChar_OrNothing(newDigit),
  clear     : () => primaryOperand.element.innerText = "",
  get       : () => parseFloat(primaryOperand.element.innerText)
};

const secondryOperand = {
  element : document.querySelector("[data-secondary-operand]"),
  addDigit  : (newDigit) => secondryOperand.element.innerText += getValidOperandChar_OrNothing(newDigit),
  clear     : () => secondryOperand.element.innerText = "",
  get       : () => parseFloat(secondryOperand.element.innerText)
};

/* Digits */
document.querySelectorAll("[data-number]").forEach(
  (numberButton) => numberButton.addEventListener(
      "click",
      () => primaryOperand.addDigit(numberButton.innerText)
  )
);

/* Operators */
document.querySelectorAll("[data-number]").forEach(
  (numberButton) => numberButton.addEventListener(
      "click",
      () => primaryOperand.addDigit(numberButton.innerText)
  )
);


/*
  function (p1, p2) { return p1; }
  (p1, p2) => p1
*/