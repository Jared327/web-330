/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Jared Dwyer
  Date: 12/8/24
  Filename: script.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {name: "Braden LeBlanc", specialty: "Expo", weakness: "Ice Cream", restaurantLocation: "Orlando, FL"},
  {name: "Johnny Macaroni", specialty: "Italian", weakness: "Soul Food", restaurantLocation: "Halifax, MA"},
  {name: "Conor O'Leary", specialty: "Salmon", weakness: "Double Dippers", restaurantLocation: "Los Angeles, CA"},
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    // Set a time out of 3 seconds
    setTimeout(() => {
      if (Math.random() < 0.85) { // Success percentage rate
        resolve(chefs[0]);
      } else {
        reject("Error retrieving Chef information")
      }
    }, 3000); // 3 second timer
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {  // Set timer for 5 seconds
      if (Math.random() < 0.6) {  // Success percentage rate
        resolve(chefs[1]);
      } else {
        reject("Error retrieving Chef information");
      }
    }, 5000); // 5 second timer
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {  // Set timer for 7 seconds
      if (Math.random() < 0.75) {  // Success percentage
        resolve(chefs[2]);
      } else {
        reject("Error retrieving Chef information");
      }
    }, 7000); // 7 second timer
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
.then( (results) =>{
  let counter = 1;

  //
  results.forEach( (result) => {
    if(result.status === "fulfilled") {
      document.getElementById("chef" + counter).innerHTML = `<h2>Chef ${result.value.name}</h2>
                                                              <p>Specialty: ${result.value.specialty}</p>
                                                              <p>Weakness: ${result.value.weakness}</p>
                                                              <p>Location: ${result.value.restaurantLocation}</p>`;
    } else {
      console.log("rejected: " + result.reason + " Counter: " + counter);
      document.getElementById("chef" + counter).innerHTML = `<h2>Chef ${counter}</h2>
                                                              <p>${result.reason}</p>`;
    }
    ++counter;
  });
});