

var wins = 0;
var losses = 0;
var ties = 0;


document.onkeyup = function (event) {

    var player1Guess = event.key;
    var player2Guess = event.key;
   

    // var player2Guess = player2Choices[Math.floor(Math.random() * player2Choices.length)];
   

    if ((player1Guess === "r") || (player1Guess === "p") || (player1Guess === "s") && (player2Guess === "r") || (player2Guess === "p") || (player2Guess === "s")) {


        if ((player1Guess === "r") && (player2Guess === "p")) {
            console.log("player1 losses");
        } else if ((player1Guess === "p") && (player2Guess === "s")) {
            console.log("player1 losses");
        } else if ((player1Guess === "r") && (player2Guess === "s")) {
            console.log("player1 wins");
        } else if ((player1Guess === "p") && (player2Guess === "r")) {
            console.log("player1 wins");
        } else if ((player1Guess === "s") && (player2Guess === "r")) {
            console.log("playe1 losses");
        } else { ((player1Guess === "s") && (player2Guess === "p")) 
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
    


