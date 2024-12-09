"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Jared Dwyer
      Date: 12/6/24

      Filename: project11-02_2.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
  // Declare variables
  let codeValue = postalCode.value;
  let countryValue = country.value;
  place.value = "";
  region.value = "";

  // Create a fetch variable
  let url = `http://api.zippopotam.us/${countryValue}/${codeValue}`;

  // Employ fetch
  fetch(url)
  .then (response => response.json())
  .then (json => {
    // Set the value of json elements
    place.value = json.places[0]["place name"];
    region.value = json.places[0]["state abbreviation"];
  })
  .catch (err => {
    // Log error to console
    console.log(err.message)
  })
}



