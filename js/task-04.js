const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const initialValue = document.getElementById("value");

let counterValue = 0;

function updateCounter() {
  initialValue.textContent = counterValue;
}
minusBtn.addEventListener("click", function () {
  counterValue -= 1;
  updateCounter();
});

plusBtn.addEventListener("click", function () {
  counterValue += 1;
  updateCounter();
});
