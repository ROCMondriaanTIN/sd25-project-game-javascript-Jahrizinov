"use strict"
//het opstart bestand, de functie start wordt als eerste uitgevoerd
//met de voorbeeld code kan je de geklite letters zien in je console!
window.onload=start;


function start()
{
    //koppel de eventhandler aan de letters
    bindcells();
}

function askPlayerNames() {
    const nameX = prompt("Voer de naam van speler X in:", "Speler X");
    const nameO = prompt("Voer de naam van speler O in:", "Speler O");

    if (nameX) playerX = nameX;
    if (nameO) playerO = nameO;

    showPoints(); // update de UI meteen met namen
}


// Bij het laden van de pagina:
window.addEventListener("load", () => {
    askPlayerNames();
});

