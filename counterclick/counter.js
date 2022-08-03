window.onload = function () {
  let increment = document.getElementById("incrementButton");
  increment.onclick = onIncrementClick;

  let buttonReset = document.getElementById("resetButton");
  buttonReset.onclick = onResetCounter;

  let decrement = document.getElementById("decrementButton");
  decrement.onclick = onDecrementClick;
};

let counterVal = 0;

function onIncrementClick() {
  updateDisplay(++counterVal);
}

function onDecrementClick() {
  updateDisplay(--counterVal);
}

function onResetCounter() {
  counterVal = 0;
  updateDisplay(counterVal);
}

function updateDisplay(val) {
  document.getElementById("counter").innerHTML = val;
}
