/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Jared Dwyer
  Date: 11/2/24
  Filename: script_2.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  return {
    getName: function() {
      return name;
    },
    //
    getGender: function() {
      return gender;
    },
    //
    getClass: function() {
      return characterClass;
    }
  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  let name = document.getElementById("heroName").value;
  let gender = document.getElementById("heroGender").value;
  let characterClass = document.getElementById("heroClass").value;
  let character;
  let output;

  //
  // name = document.getElementById("heroName").value;
  // gender = document.getElementById("heroGender").value;
  // characterClass = document.getElementById("heroClass").value;

  // TODO: Create character
  character = createCharacter(name, gender, characterClass);

  // TODO: Display character information
  output = document.getElementById("characterOutput");
  output.innerHTML = `
  <h2><strong>Character Created!</strong></h2>
  <p><strong>Name:</strong> ${character.getName()} </p>
  <p><strong>Gender:</strong> ${character.getGender()} </p>
  <p><strong>Class:</strong> ${character.getClass()} </p>`;
});