const computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const game = document.querySelector('main');
let wins = 0,
    losses = 0,
    maxGuesses = 9,
    wrongPick = [];


document.onkeyup = function(event) {
    const userGuess = event.key;
    
    const computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    if (computerChoice.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins++;
            maxGuesses = 9;
            wrongPick = [];
        }

        if (userGuess != computerGuess) {
            maxGuesses --;
            wrongPick.push(userGuess);
        }

        if (maxGuesses === 0) {
            maxGuesses =9;
            losses ++;
            wrongPick = [];
        }
    } else {
                alert("Who told you that was a letter?");
            }

    game.innerHTML = `
    <p>You Choose: ${userGuess}<p>
    <P>Computer Chose: ${computerGuess}<p>
    <p>wins: ${wins}<p>
    <p>losses: ${losses}<p>
    <p>Guesses Left: ${maxGuesses}<p>
    <p>Your Picks: ${wrongPick}<p>
    `

    
}

