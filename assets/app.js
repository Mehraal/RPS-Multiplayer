var player1 = " ";
var player2 = " ";
var player1Choices = ["r", "p", "s"];
var player2Choices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;


document.onkeyup = function (event) {

    var player1Guess = event.key;
    var compare = function(player1Guess, player2Guess){

    var player1Guess = player1Choices[Math.floor(Math.random() * player1Choices.length)];
    var player2Guess = player2Choices[Math.floor(Math.random() * player2Choices.length)];

    if ((player1Guess === "r") || (player1Guess=== "p") || (player1Guess === "s")) {


        if ((player1Guess === "r") && (player2Guess === "p")) {
          return(console.log("player2Losses"));
        }

        if ((player1Guess === "p") && (player2Guess === "s")) {
           return (console.log("player1Losses"));
        }

        if ((player1Guess === "r") && (player2Guess === "s")) {
            return(console.log("player1Wins"));
        }

        if ((player1Guess === "p") && (player2Guess === "r")) {
            return(console.log("player1Wins"));
        }

        if ((player1Guess === "s") && (player2Guess === "r")) {
            return(console.log("playe1Losses"));
        }

        if ((player1Guess === "s") && (player2Guess === "p")) {
            return(console.log("player1Wins"));
        }

        if (player1Guess === player2Guess) {
           return(console.log("you tied, try again"));
        } 
    }
        // var html =
        //     "<p>You chose: " + player1Guess + "</p>" +
        //     "<p>The playerTwo chose: " + player2Guess + "</p>" +
        //     "<p>wins: " + wins + "</p>" +
        //     "<p>losses: " + losses + "</p>" +
        //     "<p>ties: " + ties + "</p>";

        // document.querySelector("#game").innerHTML = html;
    }
}
