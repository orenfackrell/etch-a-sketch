export function createGrid(userChoice, drawingPad) {
  // Clear the board
  while (drawingPad.firstChild) {
    drawingPad.removeChild(drawingPad.firstChild);
  }

  // eslint-disable-next-line no-param-reassign
  drawingPad.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
  // eslint-disable-next-line no-param-reassign
  drawingPad.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;

  for (let i = 0; i < userChoice ** 2; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cells';
    cell.style.border = 'solid black 1px';
    drawingPad.appendChild(cell);
  }
}

export function setSize() {
  const userInput = prompt(
    'Give your desired size of drawing grid, only integer values from 16-100 are valid',
  );
  const userChoice = parseInt(userInput, 10);
  if (userChoice < 16 || userChoice > 100) {
    alert('Please choose a value between 16-100.');
    return null;
  }
  const drawingPad = document.querySelector('.drawingPad');
  createGrid(userChoice, drawingPad);
  return userChoice;
}
