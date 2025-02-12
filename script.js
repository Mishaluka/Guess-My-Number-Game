'use strict';


//takealook DOM - Document Object Model - stuctured representation of HTML documents. Allows JS to acces HTML elements and styles to manupulate them 
// It's besically a connection HTML with JS, can change text and styles etc.

/*
console.log(document.querySelector(".message").textContent); //takealook connecting DOM
document.querySelector(".message").textContent = "🎉 Correct Number!" //changing text in HTML from Start Guessing...

document.querySelector(".number").textContent = 13; // changing text under guess my number
document.querySelector(".score").textContent = 10; // changing text at score

console.log(document.querySelector(".guess").value); //value for now empty 
*/


//
//Implementing the Game Logic 
//
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//
//Event listener method (Handling Click Event)
//
document.querySelector(".check").addEventListener("click", function() { // passing function into eventListener
    const guess = Number(document.querySelector(".guess").value); //we have to add Number function too to make sure typeof is number not a string
    console.log(guess, typeof guess);
    //When there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "No Number!";
        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347"; //Accesing CSS and changing Background to green
        document.querySelector(".number").style.width = "40rem"; // Accesing CSS and making winning number bigger ( original was 15rem)

        //Setting our Highest score in the game
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        //When Guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Number too high!";
            score--; //score = score - 1
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "⛈️You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
        //When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Number too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "⛈️You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
})

//
//btn again (restarting the game by clicking button Again!)
//
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; //resign the value again 
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";

});