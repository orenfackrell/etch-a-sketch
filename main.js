/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/drawing.js ***!
  \************************/
const drawButton = document.querySelector(".button1");
const eraserButton = document.querySelector(".button2");
const clearButton = document.querySelector(".button3");
const gridButton = document.querySelector(".button4");
const drawingPad = document.querySelector(".drawingPad");

gridButton.addEventListener("click", () => {
  setSize();
});

function setSize() {
  let userInput = prompt(
    "Give your desired size of drawing grid, only integer values from 16-100 are valid"
  );

  userChoice = parseInt(userInput);
  if (userChoice >= 16 && userChoice <= 100) {
    console.log(userChoice);
  } else {
    alert("Please choose a value between 16-100.");
  }
  drawingPad.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
  drawingPad.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
  makeGrid(userChoice);
}

function makeGrid(userChoice) {
  drawingPad.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
  drawingPad.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;

  for (let i = 0; i < userChoice ** 2; i++) {
    let cell = document.createElement("div");
    cell.className = "cells";
    cell.style.border = "solid black 1px";
    drawingPad.appendChild(cell);

    function draw() {
      cell.addEventListener("mouseover", (e) => {
        cell.style.backgroundColor = "black";
      });
    }
    drawButton.addEventListener("click", () => {
      draw();
    });

    function eraser() {
      cell.addEventListener("mouseover", (e) => {
        cell.style.backgroundColor = "white";
      });
    }
    eraserButton.addEventListener("click", () => {
      eraser();
    });

    function clearGird() {
      clearButton.addEventListener("click", (e) => {
        cell.style.backgroundColor = "white";
      });
    }

    clearGird();
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxtREFBbUQsV0FBVztBQUM5RCxnREFBZ0QsV0FBVztBQUMzRDtBQUNBOztBQUVBO0FBQ0EsbURBQW1ELFdBQVc7QUFDOUQsZ0RBQWdELFdBQVc7O0FBRTNELGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvZHJhd2luZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkcmF3QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24xXCIpO1xuY29uc3QgZXJhc2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24yXCIpO1xuY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbjNcIik7XG5jb25zdCBncmlkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b240XCIpO1xuY29uc3QgZHJhd2luZ1BhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhd2luZ1BhZFwiKTtcblxuZ3JpZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzZXRTaXplKCk7XG59KTtcblxuZnVuY3Rpb24gc2V0U2l6ZSgpIHtcbiAgbGV0IHVzZXJJbnB1dCA9IHByb21wdChcbiAgICBcIkdpdmUgeW91ciBkZXNpcmVkIHNpemUgb2YgZHJhd2luZyBncmlkLCBvbmx5IGludGVnZXIgdmFsdWVzIGZyb20gMTYtMTAwIGFyZSB2YWxpZFwiXG4gICk7XG5cbiAgdXNlckNob2ljZSA9IHBhcnNlSW50KHVzZXJJbnB1dCk7XG4gIGlmICh1c2VyQ2hvaWNlID49IDE2ICYmIHVzZXJDaG9pY2UgPD0gMTAwKSB7XG4gICAgY29uc29sZS5sb2codXNlckNob2ljZSk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgY2hvb3NlIGEgdmFsdWUgYmV0d2VlbiAxNi0xMDAuXCIpO1xuICB9XG4gIGRyYXdpbmdQYWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHt1c2VyQ2hvaWNlfSwgMWZyKWA7XG4gIGRyYXdpbmdQYWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHt1c2VyQ2hvaWNlfSwgMWZyKWA7XG4gIG1ha2VHcmlkKHVzZXJDaG9pY2UpO1xufVxuXG5mdW5jdGlvbiBtYWtlR3JpZCh1c2VyQ2hvaWNlKSB7XG4gIGRyYXdpbmdQYWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHt1c2VyQ2hvaWNlfSwgMWZyKWA7XG4gIGRyYXdpbmdQYWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHt1c2VyQ2hvaWNlfSwgMWZyKWA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyQ2hvaWNlICoqIDI7IGkrKykge1xuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY2VsbHNcIjtcbiAgICBjZWxsLnN0eWxlLmJvcmRlciA9IFwic29saWQgYmxhY2sgMXB4XCI7XG4gICAgZHJhd2luZ1BhZC5hcHBlbmRDaGlsZChjZWxsKTtcblxuICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZHJhd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZHJhdygpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZXJhc2VyKCkge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVyYXNlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZXJhc2VyKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjbGVhckdpcmQoKSB7XG4gICAgICBjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckdpcmQoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9