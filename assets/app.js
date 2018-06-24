var numberOfPlayers = 2;
// var playerChoices = ["r","p","s"];

var wins = 0;
var losses = 0;
var ties = 0;


document.onkeyup = function (event) {
    
    var player1Guess = event.key;
    var player2Guess = event.key;

    if ((player1Guess === "r" || "p" || "s") && (player2Guess === "r" || "p" || "s")) {


    
    
        if ((player1Guess === "r") && (player2Guess === "p")) {
           return (console.log("player2 wins"));
        } else if ((player1Guess === "p") && (player2Guess === "s")) {
            console.log("player2 wins");
        } else if ((player1Guess === "r") && (player2Guess === "s")) {
            console.log("player1 wins");
        } else if ((player1Guess === "p") && (player2Guess === "r")) {
            console.log("player1 wins");
        } else if ((player1Guess === "s") && (player2Guess === "r")) {
            console.log("playe2 wins");
        } else { (player1Guess === player2Guess) 
            console.log("Tie! play again");
        }
}
}

       
    

    
        // var html =
        //     "<p>You chose: " + player1Guess + "</p>" +
        //     "<p>The playerTwo chose: " + player2Guess + "</p>" +
        //     "<p>wins: " + wins + "</p>" +
        //     "<p>losses: " + losses + "</p>" +
        //     "<p>ties: " + ties + "</p>";

        // document.querySelector("#game").innerHTML = html;
    


