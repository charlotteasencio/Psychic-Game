var letterChoices = ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;

//computer chooses a random letter
var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    console.log(computerGuess);

//user chooses a letter
document.onkeypress = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

if(userGuess === computerGuess) {
    wins++;
}else{
    guessesLeft--;
}

if(guessesLeft === 0) {
    losses++
    }


document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;

}

//add letter to useGuess array


//loop until guessesLeft = 0 then reset guessessLeft, guessesSoFar, and losses++

//run loop again