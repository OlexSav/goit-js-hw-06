const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", function () {
  const inputValue = inputElement.value;
  const requiredLength = Number(inputElement.dataset.length);

  if (inputValue.length === requiredLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
