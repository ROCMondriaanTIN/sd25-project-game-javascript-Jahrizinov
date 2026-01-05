'use strict'
//hier komt de spelletjes data, hieronder staat een voorbeeld

// const board = Array(42).fill('');
// [
//     {}
// ]

let board=[
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','','']
]

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
        activeSymbol='o';
    } else {
        activeSymbol='x';
    }
    console.log(activeSymbol);
}

