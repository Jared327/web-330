"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Jared Dwyer
      Date: 11/16/24

      Filename: project10-01_2.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

// Create for loop that runs grabPiece() in response to pointerdown event
for (let piece of pieces) {
  piece.addEventListener("pointerdown", grabPiece);
}

// Grab Piece function
function grabPiece(e) {
  // Set pointer values
  pointerX = e.clientX;
  pointerY = e.clientY;

  // Set value of touch action
  e.target.style.touchAction = "none";

  // increase zCounter and apply the value to zIndex
  zCounter++;
  e.target.style.zIndex = zCounter;

  // Set piece values
  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;

  // Add event listener for pointermove and pointerup
  e.target.addEventListener("pointermove", movePiece);
  e.target.addEventListener("pointerup", dropPiece);
}

// Create movePiece() function
function movePiece(e) {
  // Declare diffX and diffY variables
  let diffX = e.clientX - pointerX;
  let diffY = e.clientY - pointerY;

  // Set the value of left and top
  e.target.style.left = pieceX + diffX + "px";
  e.target.style.top = pieceY + diffY + "px";
}

// Create dropPiece() function
function dropPiece(e) {
  // Remove functions from event listeners
  e.target.removeEventListener("pointermove", movePiece);
  e.target.removeEventListener("pointerup", dropPiece);
}

