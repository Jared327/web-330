"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Jared Dwyer
      Date: 11/10/24

      Filename: project09-02a_2.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

let submit = document.getElementById("submitButton");
submit.addEventListener("click", function() {
  showData();
});

function showData() {
  sessionStorage.setItem("riderName", riderName.value);
  sessionStorage.setItem("ageGroup", ageGroup.value);
  sessionStorage.setItem("bikeOption", bikeOption.value);
  sessionStorage.setItem("routeOption", routeOption.value);
  sessionStorage.setItem("accOption", accOption.value);
  sessionStorage.setItem("region", region.value);
  sessionStorage.setItem("miles", miles.value);
  sessionStorage.setItem("comments", comments.value);
  location.href = "./project09-02b_2.html";
}