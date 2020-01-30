const gridArea = document.querySelector('#grid');
const buttons = document.querySelectorAll('button');
let squares = document.querySelectorAll('.grid-square');
let gridSize = 16;
let newSquareSize;


document.getElementById('btn-reset').addEventListener('click', createGrid);
document.getElementById('btn-blacken').addEventListener('click', blacken);
document.getElementById('btn-random').addEventListener('click', randomColor);
document.getElementById('btn-darken').addEventListener('click', darken);

// Highlight the button currently used for drawing
function makeActive(btn) {
  buttons.forEach((button) => { // remove 'active' class from all buttons and
    button.classList.remove('btn-active');
  });
  document.getElementById(`btn-${btn}`).classList.add('btn-active'); // add it to one
};

// Add one square of specified size to the grid-container
function addSquare(size) {
  newSquare = document.createElement('div');
  newSquare.classList.add('grid-square');
  newSquare.style.width = size + "px";
  newSquare.style.height = size + "px";
  gridArea.appendChild(newSquare);
}

function createGrid() {
  gridSize = prompt("Enter a size for the new grid(between 4 to 64, ESC to cancel):");
  if (gridSize === null) {
    return
  } else if (gridSize >= 4 && gridSize <= 64) {
    deleteGrid();
    gridArea.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr`;
    newSquareSize = 960 / gridSize; // Size for new square(containerWidth / numberOfSquares)
    for(i = 0; i < gridSize * gridSize; i++) {
      addSquare(newSquareSize);
    };
    squares = document.querySelectorAll('.grid-square');
    blacken(); // Default drawing mode
  } else {
    alert("Invalid input!")
    createGrid();
  }
};

function blackenSquare() {
  this.style.backgroundColor = "#000";
  this.style.opacity = 1;
};

function randomColorSquare() {
  this.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  this.style.opacity = 1;
};

function darkenSquare() {
  this.style.opacity = (parseFloat(this.style.opacity || 0)) + 0.1;
}


function blacken() {
  clearGrid();
  squares.forEach((square) => {
    square.addEventListener('mouseover', blackenSquare);
  });
  makeActive('blacken');
};

function randomColor() {
  clearGrid();
  squares.forEach((square) => {
    square.addEventListener('mouseover', randomColorSquare);
  });
  makeActive('random');
};

function darken() {
  clearGrid();
  squares.forEach((square) => {
    square.addEventListener('mouseover', darkenSquare);
  });
  makeActive('darken');
};

// Reset all squares to default color, remove Event Listeners
function clearGrid() {
  squares.forEach((square) => {
    square.style.opacity = 0;
    square.style.backgroundColor = '#000';
    square.removeEventListener('mouseover', blackenSquare);
    square.removeEventListener('mouseover', randomColorSquare);
    square.removeEventListener('mouseover', darkenSquare);
  });
};

// For deleting all grid-squares before creating new grid
function deleteGrid() {
  squares.forEach((square) => {
    gridArea.removeChild(square);
  });
}
