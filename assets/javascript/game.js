const computerChoice = ['a', 'b', 'c'];
const game = document.querySelector('index');
let Wins = 0,
    losses = 0,
    guessesLeft = 7,
    soFar = (userGuess);

document.onkeyup = function(event) {
    const userGuess = event.key;

    const computeGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        
    const userWin =
    (userGuess === computerGuess);
    if (userWin) {
        wins++;
    } else {
        soFar++;
    }

    game.innerHTML = `
    <p>Wins: $(userGuess)<p>
    <p>Losses: $()
    `
}