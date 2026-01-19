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


function showFische(){
    for(let c=0;c<cells.length;c++)
    {
        cells[c].innerHTML=board[Math.floor(c/7)][c%7];
    }
}

function showPoints() {
    const pointsDiv = document.getElementById('points');
    pointsDiv.innerHTML = `Punten X: ${pointsX} | Punten O: ${pointsO}`;
}

function showWinner(symbol) {
    const winnerDiv = document.getElementById('winner');
    winnerDiv.innerHTML = `Speler ${symbol} wint! 🎉`;
}

function clearWinner() {
    const winnerDiv = document.getElementById('winner');
    winnerDiv.innerHTML = '';
}
