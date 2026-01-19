'use strict'
//hier komen de eventhandlers, hieronder staat een voorbeeld

function handleLetterClick(event) {
    const row = Number(event.target.dataset.row);
    const col = Number(event.target.dataset.col);

    // console.log(row);
    // console.log(col);

    if (isFischeAllowed(row, col)) {
        setFische(row, col, activeSymbol);
        showFische();

        if (checkWinner())  {
    // punten toevoegen voor winnaar
    if(activeSymbol === 'x') pointsX += 10;
    else pointsO += 10;
    showWinner(activeSymbol);
    disableCells();
    showPoints(); // update UI

} else {
            changeActiveSymbol();
        }
    }
}

function resetGame() {
    // reset het bord
    for(let r = 0; r < 6; r++) {
        for(let c = 0; c < 7; c++) {
            board[r][c] = '';
        }
    }
    activeSymbol = 'x';
    showFische();

    // clear winner display
    clearWinner();

    // heractiveer cells
    const cells = document.querySelectorAll('.cells div');
    for(let c = 0; c < cells.length; c++) {
        cells[c].addEventListener('click', handleLetterClick);
        cells[c].style.pointerEvents = 'auto';
        cells[c].style.opacity = '1';
    }
}

const reset = document.querySelector('#resetButton')

reset.addEventListener('click', resetGame)


