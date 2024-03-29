import { clear, draw, eraser } from './drawing';
import { setSize } from './grid';

function addEventListeners(drawButton, eraserButton, clearButton, gridButton) {
  drawButton.addEventListener('click', () => {
    draw();
  });

  eraserButton.addEventListener('click', () => {
    eraser();
  });

  clearButton.addEventListener('click', () => {
    clear();
  });

  gridButton.addEventListener('click', () => {
    setSize();
  });
}

export default addEventListeners;
