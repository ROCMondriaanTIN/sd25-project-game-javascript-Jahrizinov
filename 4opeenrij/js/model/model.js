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
function setFische(id, fiche)
{
    //board[id]=fiche;
    board[Math.floor(id/7)][id%7]=fiche;
}

function isFischeAllowed(id){
    if(board[Math.floor(id/7)][id%7]===''){
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



function checkWinner(){

    var winner = false;
    //horizontaal controleren
    for(let r=0;r<6;r++){
        for(let c=0;c<4;c++){
            if(board[r][c]!=='' &&
               board[r][c]===board[r][c+1] &&
               board[r][c]===board[r][c+2] &&
               board[r][c]===board[r][c+3]){
               winner = true;
               }
    }
    }
    //verticaal controleren
    for(let c=0;c<7;c++){
        for(let r=0;r<3;r++){
            if(board[r][c]!=='' &&
               board[r][c]===board[r+1][c] &&
               board[r][c]===board[r+2][c] &&
               board[r][c]===board[r+3][c]){
                winner = true;
               }
    }
    }
    //diagonaal controleren (linksboven naar rechtsonder)
    for(let r=0;r<3;r++){
        for(let c=0;c<4;c++){
            if(board[r][c]!=='' &&
               board[r][c]===board[r+1][c+1] &&
               board[r][c]===board[r+2][c+2] &&
               board[r][c]===board[r+3][c+3]){
                winner = true;
               }
    }
    }

    //diagonaal controleren (rechtsboven naar linksonder)
    for(let r=3;r<6;r++){
        for(let c=0;c<4;c++){
            if(board[r][c]!=='' &&
               board[r][c]===board[r-1][c+1] &&
               board[r][c]===board[r-2][c+2] &&
               board[r][c]===board[r-3][c+3]){
                winner = true;
               }
    }
    }
    return winner;
}






checkWinner();






