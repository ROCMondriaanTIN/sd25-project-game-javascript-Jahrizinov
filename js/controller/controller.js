'use strict'
//hier komen de eventhandlers, hieronder staat een voorbeeld

function handleLetterClick(event) {
    console.log(event.target.id);

 if(isFischeAllowed(event.target.id))
    {
    setFische(event.target.id, activeSymbol);
    console.log('hallo1')
    showFische();
    changeActiveSymbol();
} else
{console.log('fische niet toegestaan: ' + event.target.id);

}

console.log(fiches);
}


