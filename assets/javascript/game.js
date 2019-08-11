var computerChoice =['a','b','c','d','e','f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Variables for wins, losses, and gueses left
var wins= 0;
var losses = 0;
var guesses = 9;
var guessesSofar= [];
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

function guessCount(){
    document.getElementById("guessesLeft-text").innerHTML = "Guesses Left : " + guesses;
}

function userGuessSoFar(){
    document.getElementById("guessesSoFar-text").innerHTML= "Your Guesses So Far :"+guessesSofar.join(' ');
}

guessCount();

var restart = function () {
    guesses = 9;
    guessesSofar = [];
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

document.onkeyup = function() {
    guesses--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  
    guessesSofar.push(userGuess);
    if (userGuess === computerGuess) {
        wins++;
        document.getElementById("wins-text").innerHTML = "Wins : " + wins;
        restart();

    } else if (guesses === 0) {
        losses++;
        document.getElementById("losses-text").innerHTML = "Loses : " + losses;
        restart();
    }

    guessCount();
    userGuessSoFar();
};
