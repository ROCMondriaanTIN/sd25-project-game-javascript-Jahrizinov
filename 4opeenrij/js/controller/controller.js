'use strict'

function handleLetterClick(event) {
    if (!gameActive) return;

    const col = Number(event.target.dataset.col);
    const row = placeFische(col, activeSymbol);
    if (row === null) return;

    showFische();

    const winner = checkWinner();

    if (winner) {
        if (winner === 'x') pointsX += 10;
        else pointsO += 10;

        showWinner(winner);
        gameActive = false;
        showPoints();
    } else {
        changeActiveSymbol();
        showTurn();
    }
}

function resetGame() {
    for(let r = 0; r < 6; r++) {
        for(let c = 0; c < 7; c++) {
            board[r][c] = '';
        }
    }
    activeSymbol = 'x';
    showTurn();
    showFische();
    clearWinner();

    const cells = document.querySelectorAll('.cells div');
    for(let c = 0; c < cells.length; c++) {
        cells[c].addEventListener('click', handleLetterClick);
        cells[c].style.pointerEvents = 'auto';
        cells[c].style.opacity = '1';
    }

    gameActive = true;
}

function placeFische(col, symbol) {
    for (let row = 5; row >= 0; row--) {
        if (isFischeAllowed(row, col)) {
            setFische(row, col, symbol);
            return row;
        }
    }
    return null;
}

const reset = document.querySelector('#resetButton')
reset.addEventListener('click', resetGame)
