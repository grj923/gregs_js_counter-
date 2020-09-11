let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counterButton = document.querySelector("#counter");

incrementButton.addEventListener("click", function () {
  console.log("+ button clicked");
  let newCounterValue = Number(counter.innerHTML) + 1;
  counter.innerHTML = newCounterValue;
  if (newCounterValue >= 10) {
    counter.style.color = "red";
    counter.innerHTML = newCounterValue;
  }
  if (newCounterValue > 25) {
    newCounterValue = alert("Slow Down!");
  }
});

decrementButton.addEventListener("click", function () {
  console.log(" - button pushed");

  let newCounterValue = Number(counter.innerHTML) - 1;

  if (newCounterValue < 10) {
    counter.style.color = "black";
  }

  if (counter.innerHTML > 0) {
    counter.innerHTML = newCounterValue;
  }
});

let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let countertwoButton = document.querySelector("#countertwo");
let resetButton = document.querySelector("#reset");

plusButton.addEventListener("click", function () {
  console.log("second + button clicked");
  let newCounter2Value = Number(countertwo.innerHTML) + 1;
  countertwo.innerHTML = newCounter2Value;
});

minusButton.addEventListener("click", function () {
  console.log("second - button clicked");
  let newCounter2Value = Number(countertwo.innerHTML) - 1;
  if (countertwo.innerHTML > 0) {
    countertwo.innerHTML = newCounter2Value;
  }
});

resetButton.addEventListener("click", function () {
  console.log("I got it");
  countertwo.innerHTML = 0;
  if (confirm("Did You Want To Reset?")) {
    txt = "resetting now";
  }
});
