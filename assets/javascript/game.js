//decalre necessary variables
var userScore;
var wins = 0;
var losses = 0;
var computerScore;
//create a function to initialize and clear the game during each win or loss event
function startGame() {
    //clear user score
    userScore = 0;
    //print new user score to page
    $("#userScore").text(userScore);
    //generate a random number between 19 and 120 for the computerScore
    computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //show computerScore on the screen
    $("#computerScore").text(computerScore);
    //generate a random number between 1 and 12 for the gems
    var blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var orangeNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var pinkNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    //logic for appending the value of each number to an attrbute named value.
    $("#blue").attr("value", blueNumber);
    $("#green").attr("value", greenNumber);
    $("#orange").attr("value", orangeNumber);
    $("#pink").attr("value", pinkNumber);
}
//print wins, losses, and userScore to start the game.
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$("#userScore").text(userScore);

//logic for adding the value of each gem to the user's score
$("img").click(function () {
    //this is how to add each of the gem's values to the user's score
    userScore += parseInt($(this).attr("value"));
    //print the value of the gems to the userScore div id
    $("#userScore").text(userScore);
    //logic for wins and losses
    if (userScore === computerScore) {
        wins++;
        $("#message").text("You Won!");
        $("#wins").text("Wins: " + wins);
        //Call the startGame function to reset the game
        startGame();
    }
    else if (userScore > computerScore) {
        losses++;
        $("#message").text("You Lost!");
        $("#losses").text("Losses: " + losses);
        //Call the startGame function to reset the game
        startGame();
    }
});
//Call the startGame function to initialize the game for the first time
startGame();
