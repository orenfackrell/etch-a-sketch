import { draw, erase } from './drawing';

function addEventListeners(
  drawButton,
  eraserButton,
  clearButton,
  gridButton,
  drawingPad,
) {
  drawButton.addEventListener('click', () => {
    draw();
  });

  eraserButton.addEventListener('click', () => {
    erase();
  });

  clearButton.addEventListener('click', () => {
    const cells = drawingPad.querySelectorAll('.cell');
    cells.forEach((cell) => {
      const currentCell = cell;
      currentCell.style.backgroundColor = 'white';
    });
  });

  gridButton.addEventListener('click', () => {});
}

export default addEventListeners;
