function generateDivs(element, n) {
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    element.appendChild(div);
  }
}

function main() {
  const gridContainer = document.querySelector(".grid-container");
  generateDivs(gridContainer, 256);
}

main();
