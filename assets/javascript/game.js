var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var game = document.querySelector('main');
let wins = 0,
    losses = 0,
    maxGuesses = 10,
    answer = [],
    wrongPick = [];

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    var showComputerGuess = document.getElementById('showComputerGuess');

document.onkeyup = function(event) {
    var userGuess = event.key;
    
    

    if (computerChoice.indexOf(userGuess) > -1) {
        
        if ((userGuess === computerGuess) && (maxGuesses > 0 )) {
            wins++;
            maxGuesses = 10;
            wrongPick = [];
        }

        if ((userGuess != computerGuess) && (maxGuesses > 0)) {
            maxGuesses --;
            wrongPick.push(userGuess);
        }

        if (maxGuesses === 0) {
            maxGuesses = 10;
            losses ++;
            wrongPick = [];
            computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            // showComputerGuess.innerHTML = computerGuess;
        }
    } else {
                alert("Who told you that was a letter?");
            }

    
    game.innerHTML = `
    <p>You Choose: ${userGuess}<p>
    <p>wins: ${wins}<p>
    <p>losses: ${losses}<p>
    <p>Guesses Left: ${maxGuesses}<p>
    <p>Your Picks: ${wrongPick}<p>
    `

    
}

