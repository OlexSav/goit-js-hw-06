const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

inputName.addEventListener("input", function () {
  const inputValue = inputName.value.trim();

  if (inputValue === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = inputValue;
  }
});
