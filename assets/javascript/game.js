//generate a random number between 19 and 120 for the computerScore
var computerScore = Math.floor(Math.random() * (120-19+1)) + 19;
//show computerScore on the screen
$("#computerScore").append(computerScore);
//generate a random number between 1 and 12 for the gems
var blueNumber = Math.floor(Math.random() * (12-1+1)) + 1;
var greenNumber = Math.floor(Math.random() * (12-1+1)) + 1;
var orangeNumber = Math.floor(Math.random() * (12-1+1)) + 1;
var pinkNumber = Math.floor(Math.random() * (12-1+1)) + 1;
//console.log the numbers to show them for now
console.log("blueNumber is: " +blueNumber);
console.log("greenNumber is: " +greenNumber);
console.log("orangeNumber is: " +orangeNumber);
console.log("pinkNumber is: " +pinkNumber);