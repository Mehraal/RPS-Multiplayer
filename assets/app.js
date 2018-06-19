var playerOneChoices = ["r", "p", "s"];
var playerTwoChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;


document.onkeyup = function (event) {

    var playerOneChoices = event.key;

    // var playerOneGuess = playerOneChoices[Math.floor(Math.random() * playerOneChoices.length)];

    if ((playerOneChoices === "r") || (playerOneChoices === "p") || (playerOneChoices === "s")) {


        if ((playerOneChoices === "r") && (playerTwoChoices === "p")) {
            losses++;
        }

        if ((playerOneChoices === "p") && (playerTwoChoices === "s")) {
            losses++;
        }

        if ((playerOneChoices === "r") && (playerTwoChoices === "s")) {
            wins++;
        }

        if ((playerOneChoices === "p") && (playerTwoChoices === "r")) {
            wins++;
        }

        if ((playerOneChoices === "s") && (playerTwoChoices === "r")) {
            losses++;
        }

        if ((playerOneChoices === "s") && (playerTwoChoices === "p")) {
            wins++;
        }

        if (playerOneChoices === playerTwoChoices) {
            ties++;
        }
        var html =
            "<p>You chose: " + playerOneChoices + "</p>" +
            "<p>The playerTwo chose: " + playerTwoChoices + "</p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>ties: " + ties + "</p>";

        document.querySelector("#game").innerHTML = html;

    }
};