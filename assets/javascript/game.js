const computerChoice = ['a', 'b', 'c'];
const game = document.querySelector('main');
let wins = 0,
    losses = 0;


document.onkeyup = function(event) {
    const userGuess = event.key;

    const computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

if(userGuess === 'a' || userGuess == 'b' || userGuess === 'c') {
    const userWin =
    (userGuess === 'a' && computerGuess === 'a') ||
    (userGuess === 'b' && computerGuess === 'b') ||
    (userGuess === 'c' && computerGuess === 'c');
    if (userWin) {
        wins++;
    } else {
        losses++;
    }

    game.innerHTML = `
    <p>wins: ${wins}<p>
    <p>losses: ${losses}<p>
    `
    }
}

