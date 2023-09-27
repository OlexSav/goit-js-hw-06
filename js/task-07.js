const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

fontSizeControl.addEventListener("input", onChange);

function onChange(event) {
  const fontSize = event.target.value;
  textElement.style.fontSize = `${fontSize}px`;
}
