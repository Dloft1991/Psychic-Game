const computerChoice = ['a', 'b', 'c'];
const game = document.querySelector('index');
let Wins = 0,
    losses = 0,
    guessesLeft = 7,
    soFar = (userGuess);

document.onkeyup = function(event) {
    const userGuess = event.key;

    const computeGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

if(userGuess === 'a' || userGuess == 'b' || userGuess === 'c') {
    const userWin =
    (userGuess === 'a' && computerGuess === 'a')
    (userGuess === 'b' && computerGuess === 'b')
    (userGuess === 'c' && computerGuess === 'c');
    if (userWin) {
        wins++;
    // } else {
    //     soFar++;
    // }

    game.innerHTML = `
    <p>Wins: ${userGuess}<p>
    <p>Losses: ${losses}<p>
    <P>Guesses Left: ${}<p>
    <p>Your Guesses so far: ${}<p>
    `
}
}