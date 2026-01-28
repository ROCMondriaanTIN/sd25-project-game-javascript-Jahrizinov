'use strict'

window.onload = start;

function start() {
    bindcells();
}

function askPlayerNames() {
    const nameX = prompt("Voer de naam van speler X in:", "Speler X");
    const nameO = prompt("Voer de naam van speler O in:", "Speler O");

    if (nameX) playerX = nameX;
    if (nameO) playerO = nameO;

    showTurn();
    showPoints();
}

window.addEventListener("load", () => {
    askPlayerNames();
});
