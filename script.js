const gridContainer = document.querySelector(".grid-container");
const generateBtn = document.querySelector("#generate-btn");
const resetBtn = document.querySelector("#reset-btn");
const colorSet = [
  "red",
  "orange",
  "yellow",
  "green",
  "skyblue",
  "blue",
  "purple",
];

function appendDivToGrid(gridSize) {
  const divSize = 512 / gridSize;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", `width: ${divSize}px; height: ${divSize}px;`);
    div.addEventListener("mouseover", addHoverEffect);
    gridContainer.appendChild(div);
  }
}

function initGrid() {
  gridContainer.innerHTML = "";
  appendDivToGrid(16);
}

function generateGrid() {
  gridContainer.innerHTML = "";
  let gridSize;

  do {
    gridSize = parseInt(prompt("Please enter the grid size (max 100)"));
  } while (gridSize > 100 || gridSize < 0);
  appendDivToGrid(gridSize);
}

function addHoverEffect() {
  const color = colorSet[Math.floor(Math.random() * colorSet.length)];
  this.style.backgroundColor = color;
}

function main() {
  initGrid();
  generateBtn.addEventListener("click", generateGrid);
  resetBtn.addEventListener("click", initGrid);
}

main();
