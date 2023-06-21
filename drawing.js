const drawButton = document.querySelector('.button1')
const eraserButton = document.querySelector('.button2')
const clearButton = document.querySelector('.button3')
const gridButton = document.querySelector(".button4")
 
function adjustGrid(userChoice){
    let girdSize = 16;


}

gridButton.addEventListener('click', e => { 
    let userInput = prompt("Give your desired size of drawing grid, only integer values from 16-100 are valid");
    
    userChoice = parseInt(userInput);
    if (userChoice >= 16 && userChoice <= 100){
        console.log(userChoice)    
    }  else {
        alert("Please choose a value between 16-100.")
    };
});

