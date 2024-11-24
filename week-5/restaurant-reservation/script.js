"use strict";
/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Jared Dwyer
  Date: 11/24/24
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  {tableNumber: 1, tableCapacity: 2, isReserved: false},
  {tableNumber: 2, tableCapacity: 2, isReserved: false},
  {tableNumber: 3, tableCapacity: 4, isReserved: false},
  {tableNumber: 4, tableCapacity: 4, isReserved: false},
  {tableNumber: 5, tableCapacity: 6, isReserved: false},
  {tableNumber: 6, tableCapacity: 6, isReserved: false},
  {tableNumber: 7, tableCapacity: 8, isReserved: false},
  {tableNumber: 8, tableCapacity: 8, isReserved: false},
  {tableNumber: 9, tableCapacity: 10, isReserved: false},
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  // Find table from array
  let tableIndex = tables.findIndex((table) => table.tableNumber == tableNumber);
  if (!tables[tableIndex].isReserved) {
    tables[tableIndex].isReserved = true;

    // callback
    setTimeout(() => {
      callback(`Table ${tableNumber} is reserved for ${document.getElementById("name").value}.`)
    }, time);
  } else {
    // if table is not available
    callback(`Table ${tableNumber} is not available.`);
  }
}

// Validate reservation name
function validateName() {
  let reservationName = document.getElementById("name");
  if (reservationName.validity.valueMissing) {
    reservationName.setCustomValidity("Provide a name to complete your reservation");
  } else {
    reservationName.setCustomValidity("");
  }
}

// validateTable
function validateTable() {
  let tableInput = document.getElementById("tableNumber");
  if (tableInput.validity.valueMissing || tableInput.validity.rangeOverFlow || tableInput.validity.rangeUnderFlow) {
    tableInput.setCustomValidity("Select a table from 1 to 9");
  } else {
    tableInput.setCustomValidity("");
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault();
    reserveTable(tableNumber.value, (reservationMessage) => {
      // Add a confirmation message for user clarification
      message.style.display = "block";
      if (reservationMessage.includes("reserved for")) {
        message.style.color = "blue";
      } else {
        message.style.color = "red";
      }
      message.innerHTML = reservationMessage;}, 4000);
  });
