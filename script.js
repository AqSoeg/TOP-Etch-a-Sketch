const gridContainer = document.querySelector(".grid-container");
const generateBtn = document.querySelector("#generate-btn");
const resetBtn = document.querySelector("#reset-btn");
const autoBtn = document.querySelector("#auto-btn");
const colorSet = [
  "red",
  "orange",
  "yellow",
  "green",
  "skyblue",
  "blue",
  "purple",
];
let gridSize = 16;

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

  do {
    gridSize = parseInt(prompt("Please enter the grid size (max 100)"));
  } while (gridSize > 100 || gridSize < 0);
  appendDivToGrid(gridSize);
}

function addHoverEffect() {
  const color = colorSet[Math.floor(Math.random() * colorSet.length)];
  this.style.backgroundColor = color;
}

function autoRun() {
  gridContainer.innerHTML = "";
  const divSize = 512 / gridSize;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    const color = colorSet[Math.floor(Math.random() * colorSet.length)];
    div.setAttribute(
      "style",
      `width: ${divSize}px; height: ${divSize}px; background-color: ${color};`
    );
    gridContainer.appendChild(div);
  }
}

function main() {
  initGrid();
  generateBtn.addEventListener("click", generateGrid);
  resetBtn.addEventListener("click", initGrid);
  autoBtn.addEventListener("click", autoRun);
}

main();
