const container = document.querySelector("#container");
let color = "blue";

let cellBrightness = 2;

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-brightness', Math.random());
    let size = (512/rows) - 2;
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      cell.style.width = size + "px";
      cell.style.height = size + "px";
      cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = color;
        if(cellBrightness > 0) cellBrightness = cellBrightness-0.1;
        if(cellBrightness <= 0) cellBrightness = 2;
        cell.style.filter = "brightness(" + cellBrightness + ")";
      });
    }
  }

  makeRows(16, 16);

var slider = document.getElementById("myRange");
var output = document.getElementById("sliderVal");
output.textContent = slider.value + " x " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.textContent = this.value + " x " + this.value;
  while(container.firstChild) container.removeChild(container.firstChild);
  makeRows(this.value, this.value);
};