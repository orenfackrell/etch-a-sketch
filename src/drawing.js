export function draw() {
  const cells = document.querySelectorAll('.cells');
  cells.forEach((cell) => {
    const currentCell = cell;
    currentCell.addEventListener('mouseover', () => {
      currentCell.style.backgroundColor = 'black';
    });
  });
}

export function eraser() {
  const cells = document.querySelectorAll('.cells');
  cells.forEach((cell) => {
    const currentCell = cell;
    currentCell.addEventListener('mouseover', () => {
      currentCell.style.backgroundColor = 'white';
    });
  });
}

export function clear() {
  const drawingPad = document.querySelector('.drawingPad');
  const cells = drawingPad.querySelectorAll('.cells');
  cells.forEach((cell) => {
    const currentCell = cell;
    currentCell.style.backgroundColor = 'white';
  });
}
