var userScore = 0;
var wins = 0;
var losses = 0;
//print wins, losses, and userScore to start the game.
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$("#userScore").text(userScore);
//generate a random number between 19 and 120 for the computerScore
var computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//show computerScore on the screen
$("#computerScore").text(computerScore);
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
    //logic for wins and losses
    if (userScore === computerScore) {
        wins++;
        $("#message").text("You Won!");
        $("#wins").text("Wins: " + wins);
        //reset the game
        //clear user score
        userScore = 0;
        //print new user score to page
        $("#userScore").text(userScore);
        //generate a new number for computer score
        computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        //show computerScore on the screen
        $("#computerScore").text(computerScore);
        //generate a new random number between 1 and 12 for the gems
        blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        orangeNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        pinkNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
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
    }
    else if (userScore > computerScore) {
        losses++;
        $("#message").text("You Lost!");
        $("#losses").text("Losses: " + losses);
                //reset the game
        //clear user score
        userScore = 0;
        //print new user score to page
        $("#userScore").text(userScore);
        //generate a new number for computer score
        computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        //show computerScore on the screen
        $("#computerScore").text(computerScore);
        //generate a new random number between 1 and 12 for the gems
        blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        orangeNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        pinkNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
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
    }
});
