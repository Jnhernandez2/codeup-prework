"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var nameresponse = prompt("What is your name?");
		while (nameresponse === "") {
		nameresponse = prompt("Please enter your name.");
		}
		if (nameresponse) {
		alert("Welcome " + nameresponse);
	}
// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var confirmpizza = prompt("Do you like pizza, " + nameresponse + "?");
	if (confirmpizza) {
		alert("Let's go get some now!")
	} else {
		alert("We can't be friends.")
	}