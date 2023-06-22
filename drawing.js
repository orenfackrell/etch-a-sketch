const drawButton = document.querySelector('.button1');
const eraserButton = document.querySelector('.button2');
const clearButton = document.querySelector('.button3');
const gridButton = document.querySelector('.button4');
const drawingPad = document.querySelector('.drawingPad');

function makeGrid(userChoice){
    for (let i = 0; i < userChoice**2; i++){

        let cell = document.createElement('div');
        cell.className='cells';
        cell.style.border = 'solid black 1px';
        drawingPad.style.display = 'grid';
        drawingPad.style.gridTemplateColumns = 'repeat(16, auto)';
        drawingPad.appendChild(cell)
    }
};

gridButton.addEventListener('click', e => { 
    let userInput = prompt("Give your desired size of drawing grid, only integer values from 16-100 are valid");
    
    userChoice = parseInt(userInput);
    if (userChoice >= 16 && userChoice <= 100){
        console.log(userChoice)    
    }  else {
        alert("Please choose a value between 16-100.")
    };

makeGrid(+userChoice)
});
// this will not work with all values given.
// must make a slider that will allow for values that will make a grid.

makeGrid(16)
// the page will have a 16x16 grid by default