let squares = document.querySelectorAll('.grid-square');
let gridSize = 4;

document.getElementById('btn-blacken').addEventListener('click', blacken);
document.getElementById('btn-random').addEventListener('click', randomColor);
document.getElementById('btn-darken').addEventListener('click', darken);

function blacken() {
  squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      square.style.opacity = 1;
    });
  });
};

function randomColor() {
  squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      square.style.opacity = 1;
      square.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    });
  });
};

function darken() {
  squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      square.style.opacity = (parseFloat(square.style.opacity || 0)) + 0.1;
    });
  });
};
