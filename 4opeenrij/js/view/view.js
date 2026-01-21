'use strict'
//hier komen de view functies, hieronder staat voorbeeld code
const cells = document.querySelectorAll('.cells div');

function bindcells() {
    console.log("bindcells werkt");
    const cells = document.querySelectorAll('.cells div');
    for (let c = 0; c < cells.length; c++) {
        cells[c].addEventListener('click', handleLetterClick);
    }
}


function showFische() {
    for (let c = 0; c < cells.length; c++) {
        const row = Math.floor(c / 7);
        const col = c % 7;
        const symbol = board[row][col];

        cells[c].textContent = symbol;

        // achtergrondkleur in plaats van text color
        if (symbol === 'x') {
            cells[c].style.backgroundColor = 'red';
            cells[c].style.color = 'white'; // tekst beter zichtbaar
        } else if (symbol === 'o') {
            cells[c].style.backgroundColor = 'yellow';
            cells[c].style.color = 'black';
        } else {
            cells[c].style.backgroundColor = '#e0e0e0'; // standaard kleur
            cells[c].style.color = 'black';
        }
    }
}
function showPoints() {
    const pointsDiv = document.getElementById('points');
    pointsDiv.innerHTML = `${playerX}: ${pointsX} punten | ${playerO}: ${pointsO} punten`;
}


function showWinner(symbol) {
    const winnerDiv = document.getElementById('winner');
    winnerDiv.innerHTML = `Speler ${symbol} wint! 🎉`;
}

function clearWinner() {
    const winnerDiv = document.getElementById('winner');
    winnerDiv.innerHTML = '';
}
