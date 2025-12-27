const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.addEventListener("click", function () {
  count++;
  countLabel.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
  count--;
  countLabel.innerText = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countLabel.textContent = count;
});
