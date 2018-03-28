var letterChoices = ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;
var userGuess = [];

//computer chooses a random letter
var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

//user chooses a letter

//check if the two match 

if(userGuess === computerGuess) {
    wins++;
    guessesLeft = 9;
    guessesSoFar = 0;
} else {
    guessesLeft--;
    //add user guess to user guess array
}

//loop until guessesLeft = 0 then reset guessessLeft, guessesSoFar, and losses++
//run loop again