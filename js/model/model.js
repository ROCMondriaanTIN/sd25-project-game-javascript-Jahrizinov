'use strict'
//hier komt de spelletjes data, hieronder staat een voorbeeld

const fiches = Array(42).fill('');

function setFische(id, fiche)
{
    fiches[id]=fiche;
}

function isFischeAllowed(id){
    if(fiches[id]===''){
        console.log(activeSymbol)
        return true;
    } else {
    return false;    }
}

let activeSymbol='x';

function changeActiveSymbol(){
    console.log('hallo1')
    //hier komt de code om het actieve symbool te veranderen
    if(activeSymbol==='x'){
        activeSymbol='O';
        console.log('hallo2')
    } else {
        activeSymbol='x';
    }
    console.log(activeSymbol);
}


