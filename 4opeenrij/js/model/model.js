'use strict'
//hier komt de spelletjes data, hieronder staat een voorbeeld

//const board = Array(42).fill('');
const board=[
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],];
function setFische(row, col, symbol) {
    board[row][col] = symbol;
}

function isFischeAllowed(row, col) {
    return board[row][col] === '';
}

let activeSymbol='x';

function changeActiveSymbol(){
    if(activeSymbol === 'x'){
        activeSymbol = 'o'; // kleine letter
    } else {
        activeSymbol = 'x';
    }
    console.log("Actieve speler:", activeSymbol);
}


let playerX = "Speler X"; // standaardnaam
let playerO = "Speler O";
let pointsX = 0;
let pointsO = 0;
let gameActive = true; // spel actief of niet

function checkWinner() {
    // horizontaal
    for(let r=0; r<6; r++){
        for(let c=0; c<4; c++){
            if(board[r][c] !== '' &&
               board[r][c] === board[r][c+1] &&
               board[r][c] === board[r][c+2] &&
               board[r][c] === board[r][c+3]){
                return board[r][c]; // 'x' of 'o'
            }
        }
    }

    // verticaal
    for(let c=0; c<7; c++){
        for(let r=0; r<3; r++){
            if(board[r][c] !== '' &&
               board[r][c] === board[r+1][c] &&
               board[r][c] === board[r+2][c] &&
               board[r][c] === board[r+3][c]){
                return board[r][c];
            }
        }
    }

    // diagonaal linksboven → rechtsonder
    for(let r=0; r<3; r++){
        for(let c=0; c<4; c++){
            if(board[r][c] !== '' &&
               board[r][c] === board[r+1][c+1] &&
               board[r][c] === board[r+2][c+2] &&
               board[r][c] === board[r+3][c+3]){
                return board[r][c];
            }
        }
    }

    // diagonaal rechtsboven → linksonder
    for(let r=3; r<6; r++){
        for(let c=0; c<4; c++){
            if(board[r][c] !== '' &&
               board[r][c] === board[r-1][c+1] &&
               board[r][c] === board[r-2][c+2] &&
               board[r][c] === board[r-3][c+3]){
                return board[r][c];
            }
        }
    }

    return null; // niemand gewonnen
}


// function checkWinner(){

//     var winner = false;
//     //horizontaal controleren
//     for(let r=0;r<6;r++){
//         for(let c=0;c<4;c++){
//             if(board[r][c]!=='' &&
//                board[r][c]===board[r][c+1] &&
//                board[r][c]===board[r][c+2] &&
//                board[r][c]===board[r][c+3]){
//                winner = true;
//                }
//     }
//     }
//     //verticaal controleren
//     for(let c=0;c<7;c++){
//         for(let r=0;r<3;r++){
//             if(board[r][c]!=='' &&
//                board[r][c]===board[r+1][c] &&
//                board[r][c]===board[r+2][c] &&
//                board[r][c]===board[r+3][c]){
//                 winner = true;
//                }
//     }
//     }
//     //diagonaal controleren (linksboven naar rechtsonder)
//     for(let r=0;r<3;r++){
//         for(let c=0;c<4;c++){
//             if(board[r][c]!=='' &&
//                board[r][c]===board[r+1][c+1] &&
//                board[r][c]===board[r+2][c+2] &&
//                board[r][c]===board[r+3][c+3]){
//                 winner = true;
//                }
//     }
//     }

//     //diagonaal controleren (rechtsboven naar linksonder)
//     for(let r=3;r<6;r++){
//         for(let c=0;c<4;c++){
//             if(board[r][c]!=='' &&
//                board[r][c]===board[r-1][c+1] &&
//                board[r][c]===board[r-2][c+2] &&
//                board[r][c]===board[r-3][c+3]){
//                 winner = true;
//                }
//     }
//     }
//     return winner;
// }








