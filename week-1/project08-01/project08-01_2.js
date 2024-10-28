"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Jared Dwyer
      Date: 10/27/24

      Filename: project08-01_2.js
*/

/*--------------- Object Code --------------------*/
// Constructor function for timer
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// Create runPause() method to timer function
timer.prototype.runPause = function(timer, minBox, secBox) {
  // Use if/else to run and stop timer
  if (timer.timeID) {
    // Stop
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    // Run
    timer.timeID = window.setInterval(countDown, 1000);
  }

  // Create countDown() function to update every second
  function countDown() {
    if (timer.seconds > 0) {
      // Count down seconds
      timer.seconds -= 1;
    } else if (timer.minutes > 0){
      // Count down minutes
      timer.minutes -= 1;
      timer.seconds = 59;
    } else {
      // Stop timer after time runs out
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }

    // Write the values inside boxes
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }
}


/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Create timer Object
let myTimer = new timer(minBox.value, secBox.value);

// Create event handler for minBox
minBox.onchange = function() {
  myTimer.minutes = minBox.value;
}

// Create event handler for secBox
secBox.onchange = function() {
  myTimer.seconds = secBox.value;
}

// Create event handler for runPauseTimer
runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
}