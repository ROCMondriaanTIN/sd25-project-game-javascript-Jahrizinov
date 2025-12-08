'use strict'
//hier komt de spelletjes data, hieronder staat een voorbeeld

const fiches = ['','','','','','','','',''];

function setFische(id, fiche)
{
    fiches[id]=fiche;
}

function isFischeAllowed(id){
    if(fiches[id]===''){
        return true;
    } else {
    return false;    }
}