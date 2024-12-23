"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Jared Dwyer
      Date: 12/21/24

      Filename: project12-03_2.js
*/
$("article > h2").click(function () {
  // Declare variables
  let heading = $(this);
  let list = heading.next();
  let headingImage = heading.children("img");

  // Toggle hide and show for content
  list.slideToggle(500);

  // Change symbol displayed in headings
  if (headingImage.attr("src") === "plus.png") {
    headingImage.attr("src", "minus.png");
  } else {
    headingImage.attr("src", "plus.png");
  }
})

