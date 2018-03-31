var letterChoices = ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
    "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//reset
var reset = function(){
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    console.log(computerGuess);
}

//computer chooses a random letter
var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    console.log(computerGuess);

//user chooses a letter
document.onkeypress = function(event) {
    var userGuess = event.key;

//user guess matches computer guess
if(userGuess === computerGuess) {
    wins++;
    guesses = 9;
    reset();
//user guess does not match computer guess
}else{
    guessesLeft--;
    guessesSoFar.push(userGuess);
}
//guessesLeft equals zero but user guess never equaled computer guess
if(guessesLeft === 0) {
    losses++;
    guessesLeft = 9;
    //start loop over, get computer to choose another letter
    reset();

    }

//change html elements according to guesses, wins, losses
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
document.getElementById("guessesSoFar").innerHTML= "Your Guesses so Far: " + guessesSoFar.join(", ");
}