'use strict'
//hier komt de spelletjes data, hieronder staat een voorbeeld

const board = Array(42).fill('');

function setFische(id, fiche)
{
    board[id]=fiche;
}

function isFischeAllowed(id){
    if(board[id]===''){
        return true;
    } else {
    return false;    }
}

let activeSymbol='x';

function changeActiveSymbol(){
    //hier komt de code om het actieve symbool te veranderen
    if(activeSymbol==='x'){
        activeSymbol='O';
    } else {
        activeSymbol='x';
    }
    console.log(activeSymbol);
}

function checkWinner(player) {
    const ROWS = 6;
    const COLS = 7;

    // Helper functie om index te berekenen: row * COLS + col
    const getIndex = (r, c) => r * COLS + c;

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const start = board[getIndex(r, c)];

            if (start !== player) continue;

            // ➡️ horizontaal
            if (
                c <= 3 &&
                start === board[getIndex(r, c + 1)] &&
                start === board[getIndex(r, c + 2)] &&
                start === board[getIndex(r, c + 3)]
            ) {
                return true;
            }

            // ⬇️ verticaal
            if (
                r <= 2 &&
                start === board[getIndex(r + 1, c)] &&
                start === board[getIndex(r + 2, c)] &&
                start === board[getIndex(r + 3, c)]
            ) {
                return true;
            }

            // ↘️ diagonaal rechts
            if (
                r <= 2 && c <= 3 &&
                start === board[getIndex(r + 1, c + 1)] &&
                start === board[getIndex(r + 2, c + 2)] &&
                start === board[getIndex(r + 3, c + 3)]
            ) {
                return true;
            }

            // ↙️ diagonaal links
            if (
                r <= 2 && c >= 3 &&
                start === board[getIndex(r + 1, c - 1)] &&
                start === board[getIndex(r + 2, c - 2)] &&
                start === board[getIndex(r + 3, c - 3)]
            ) {
                return true;
            }
        }
    }
    return false;
}
