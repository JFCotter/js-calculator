// CALCULATOR

"use strict";

//CONSTANTS
const calculator = {
  displayValue: "0",
};

const previousOperand = document.querySelector("[data-previousOperand]");
const currentOperand = document.querySelector("[data-currentOperand]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const equalsButton = document.querySelector("[data-equals]");

// FUNCTIONS

function updateDisplay() {
  currentOperand.innerText = calculator.displayValue;
}

updateDisplay();

/* Ben started ruining it hereinafter... */

numberButtons.forEach(
  numberButton => numberButton.addEventListener(
      "click",
      () => console.log("Number Button CLicked!")
    );
);

function (p1, p2) { return p1; }
(p1, p2) => p1