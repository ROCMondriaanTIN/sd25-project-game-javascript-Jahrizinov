'use strict'
//controlller.js
//hier komen de eventhandlers, hieronder staat een voorbeeld

// function handleLetterClick(event) {
//     const col = Number(event.target.dataset.col); // pak kolom

//     const row = placeFische(col, activeSymbol); // laat de zet vallen
//     if (row === null) return; // kolom vol

//     showFische(); // update UI met symbolen en kleuren
// const winner = checkWinner(); // krijg 'x', 'o', of null
//     if (winner) {
//         // punten bijwerken
//         if (winner === 'x') pointsX += 10;
//         else pointsO += 10;
//         showTurn();


//         showWinner(activeSymbol);       // laat zien wie wint
//         gameActive = false;
//         showPoints();             // update UI
//     } else {
//         changeActiveSymbol();
        
//     }
// console.log("Punten X:", pointsX, "Punten O:", pointsO);


// }

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

        showWinner(winner);   // 🔥 winnaar meegeven
        gameActive = false;
        showPoints();
    } else {
        changeActiveSymbol(); // 🔄 eerst wisselen
        showTurn();           // 👀 dan tonen
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

    gameActive = true
}

function placeFische(col, symbol) {
    // loop van onder naar boven in de kolom
    for (let row = 5; row >= 0; row--) {
        if (isFischeAllowed(row, col)) {
            setFische(row, col, symbol);
            return row; // geeft terug op welke rij de zet is geplaatst
        }
    }
    return null; // kolom vol
}

const reset = document.querySelector('#resetButton')

reset.addEventListener('click', resetGame)


