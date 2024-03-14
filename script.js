function generateDivs(element, n) {
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    element.appendChild(div);
  }
}

function generateGrid() {
  const pixel = 10;
  let size = 16;
  let length = size * pixel;

  const gridContainer = document.querySelector(".grid-container");
  gridContainer.innerHTML = "";

  do {
    size = parseInt(
      prompt("Please enter the size of the new grid (less than 100)")
    );
    length = size * pixel;
  } while (size > 100);

  gridContainer.setAttribute(
    "style",
    `width: ${length}px; height: ${length}px;`
  );
  generateDivs(gridContainer, size * size);
}

function main() {
  const generateBtn = document.querySelector("#generate-btn");
  generateBtn.addEventListener("click", generateGrid);
}

main();
