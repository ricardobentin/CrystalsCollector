var userScore = 0;
var wins = 0;
var losses = 0;
//print wins, losses, and userScore to start the game.
$("#wins").append("Wins: " + wins);
$("#losses").append("Losses: " + losses);
$("#userScore").append(userScore);
//generate a random number between 19 and 120 for the computerScore
var computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//show computerScore on the screen
$("#computerScore").append(computerScore);
//generate a random number between 1 and 12 for the gems
var blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var orangeNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var pinkNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
//console.log the numbers to show them for now
console.log("blueNumber is: " + blueNumber);
console.log("greenNumber is: " + greenNumber);
console.log("orangeNumber is: " + orangeNumber);
console.log("pinkNumber is: " + pinkNumber);
//logic for appending the value of each number to an attrbute named value.
$("#blue").attr("value", blueNumber);
$("#green").attr("value", greenNumber);
$("#orange").attr("value", orangeNumber);
$("#pink").attr("value", pinkNumber);
//logic for adding the value of each gem to the user's score
$("img").click(function () {
    //this is how to add each of the gem's value's to the user's score
    userScore += parseInt($(this).attr("value"));
    //print the value of the gems to the userScore div id
    $("#userScore").text(userScore);
});