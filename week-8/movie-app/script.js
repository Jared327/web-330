/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Jared Dwyer
  Date: 12/15/24
  Filename: scripts.js
*/

"use strict";
// Movie info from imdb.com
const movies = [
  // Add your movie objects here
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    releaseYear: "2014",
    synopsis: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
  },
  {
    title: "The Wolf of Wall Street",
    director: "Martin Scorsese",
    releaseYear: "2013",
    synopsis: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  },
  {
    title: "GoodFellas",
    director: "Martin Scorsese",
    releaseYear: "1990",
    synopsis: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
  },
  {
    title: "The Lighthouse",
    director: "robert Eggers",
    releaseYear: "2019",
    synopsis: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
  },
  {
    title: "Major Payne",
    director: "Nick Castle",
    releaseYear: "1995",
    synopsis: "When a recently discharged Marine struggles to adjust to civilian life, his commanding officer brings him back to the military to train and lead a group of misfit JORTC cadets.",
  },
];

// Event listener for button
document.getElementById("btnSearch").addEventListener("click", validateTitle);

function resetDisplays() {
  document.getElementById("movie-title").textContent = "";
  document.getElementById("movie-director").textContent = "";
  document.getElementById("movie-year").textContent = "";
  document.getElementById("movie-synopsis").textContent = "";
  document.getElementById("error-message").textContent = "";

  document.getElementById("error-message").style.display = "none";
  document.getElementById("movie-info").style.display = "none";
}

function validateTitle() {
  let inputTitle = document.getElementById("title-input");
  if(inputTitle.validity.valueMissing) {
    inputTitle.setCustomValidity("Please enter a movie title.");
  } else {
    inputTitle.setCustomValidity("");
  }
}

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let movieIndex = movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase());
      if (movieIndex >= 0) {
        resolve(movies[movieIndex]);
      } else {
        reject(`The movie "${title}" was not found.`);
      }
    }, 2000);
  });
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  event.preventDefault();

  resetDisplays();

  try {
    let searchTitle = document.getElementById("title-input").value;
    let movie = await fetchMovie(searchTitle);
    document.getElementById("movie-info").style.display = "block";
    document.getElementById("movie-title").textContent = movie.title;
    document.getElementById("movie-director").textContent = movie.director;
    document.getElementById("movie-year").textContent = movie.releaseYear;
    document.getElementById("movie-synopsis").textContent = movie.synopsis;
  } catch(err) {
    document.getElementById("error-message").style.display = "block";
    document.getElementById("error-message").textContent = err;
  }
});