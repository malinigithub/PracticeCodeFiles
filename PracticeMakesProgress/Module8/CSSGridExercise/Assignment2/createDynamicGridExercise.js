let position = 1; // The starting position of the grid
const gridSize = 100; // The total number of the grid cells

function createGrid() {
  let newDiv = "";
  // Should create a new Div based on the gridSize variable value and append these divs to the element with id "target"
  for (let i = 1; i <= gridSize; i++) {
    //newDiv += `<div id=\'s${i}\'> ${i} </div>`;
    let target = document.getElementById("target");
    let divElement = document.createElement("div");
    let divLabel = document.createElement("label");
    divLabel.setAttribute("name", `s${i}`);
    divElement.id = `s${i}`;
    // divElement.appendChild(divLabel)
    divElement.innerHTML = i;
    divElement.className = "div";
    target.appendChild(divElement);
  }
}

function move() {
  // Should increment the position variable by 1 each 100ms taking into consideration the gridSize variable value
  // This function should make use of the toggle function below to change the CSS class on a specific div element
  let timer = null;
  timer = setTimeout(() => {
    if (position > 1 && position < gridSize) {
      const prevElement = document.getElementById(`s${position - 1}`);
      prevElement.classList.remove("on");
    }
    toggle(position);
    position = position + 1;
    if (position > gridSize) clearTimeout(timer);
  }, 100);

  // timer = setTimeout(() => {
  //   toggle(position);
  //   if (position > gridSize) return 0
  //   position = position + 1;
  // }, 1)
  /*   for (i=1; i < gridSize ; i++ ){
    position = i;
    if (position > 1 && position < gridSize) {
      const prevElement = document.getElementById(`s${position-1}`);
      prevElement.classList.remove('on');
    }
    toggle(position);
  } */
}

function toggle(position) {
  // Takes a position parameter referencing a grid cell and sets the class name of that cell (or div) to the class 'on'
  // The CSS class "on" is defined in the styles.css file
  // If a position of less than 1 is passed into the function, return 0 as the grid positions only go from 1 to 100
  if (position < 1 || position > gridSize) return 0;
  const element = document.getElementById(`s${position}`);
  element.classList.add("on");
}

//don't change this line
if (typeof module !== "undefined") {
  module.exports = { createGrid, move, toggle };
}
