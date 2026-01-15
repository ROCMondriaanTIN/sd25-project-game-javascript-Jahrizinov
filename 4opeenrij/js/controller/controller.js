'use strict'
//hier komen de eventhandlers, hieronder staat een voorbeeld

function handleLetterClick(event) {
    console.log(event.target.id);

    if(isFischeAllowed(event.target.id))
    {
        setFische(event.target.id, activeSymbol);
        showFische();
        
        // Check of er een winnaar is
        if(checkWinner()) {
            console.log('We have a winner: ' + activeSymbol);
            alert(`Speler ${activeSymbol} wint! 🎉`);
            disableCells();
        } else {
            changeActiveSymbol();
        }
    } else {
        console.log('fiche niet toegestaan: ' + event.target.id);
    }

    console.log(board);
}

function disableCells() {
    const cells = document.querySelectorAll('.grid-cells div');
    for(let c = 0; c < cells.length; c++) {
        cells[c].removeEventListener('click', handleLetterClick);
        cells[c].style.pointerEvents = 'none';
        cells[c].style.opacity = '0.5';
    }
}

function resetGame() {
    // Reset het bord
    for(let r = 0; r < 6; r++) {
        for(let c = 0; c < 7; c++) {
            board[r][c] = '';
        }
    }
    activeSymbol = 'x';
    showFische();
    
    // Re-enable cells
    const cells = document.querySelectorAll('.grid-cells div');
    for(let c = 0; c < cells.length; c++) {
        cells[c].addEventListener('click', handleLetterClick);
        cells[c].style.pointerEvents = 'auto';
        cells[c].style.opacity = '1';
    }
}


