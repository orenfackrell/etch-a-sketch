import './styles.css';
import addEventListeners from './buttonListeners';
import { createGrid, setSize } from './grid';

const drawButton = document.querySelector('.button1');
const eraserButton = document.querySelector('.button2');
const clearButton = document.querySelector('.button3');
const gridButton = document.querySelector('.button4');
const drawingPad = document.querySelector('.drawingPad');

document.addEventListener('DOMContentLoaded', () => {
  addEventListeners(drawButton, eraserButton, clearButton, gridButton);
});

createGrid(16, drawingPad);
