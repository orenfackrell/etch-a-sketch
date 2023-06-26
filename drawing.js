const drawButton = document.querySelector('.button1');
const eraserButton = document.querySelector('.button2');
const clearButton = document.querySelector('.button3');
const gridButton = document.querySelector('.button4');
const drawingPad = document.querySelector('.drawingPad');

gridButton.addEventListener('click', () => { 
    setSize()
});

function setSize(){
    let userInput = prompt("Give your desired size of drawing grid, only integer values from 16-100 are valid");
    
    userChoice = parseInt(userInput);
    if (userChoice >= 16 && userChoice <= 100){
        console.log(userChoice)    
    }  else {
        alert("Please choose a value between 16-100.")
    };
    drawingPad.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    drawingPad.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
    makeGrid(userChoice)
}


function makeGrid(userChoice){
    for (let i = 0; i < userChoice**2; i++){

        let cell = document.createElement('div');
        cell.className='cells';
        cell.style.border = 'solid black 1px';
        drawingPad.style.display = 'grid';
        drawingPad.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
        drawingPad.appendChild(cell)
    }
};



makeGrid(16)
