'use strict'
//hier komen de view functies, hieronder staat voorbeeld code
const cells = document.querySelectorAll('.grid-cells div');

function bindcells(){
    for(let c=0;c<cells.length;c++)
    {
        cells[c].addEventListener('click', handleLetterClick);
    }
}

function showFische(){
    for(let c=0;c<cells.length;c++)
    {
        cells[c].innerHTML=board[Math.floor(c/7)][c%7];
    }
}

function showPoints(points){
    const pointsDiv=document.getElementById('points');
    pointsDiv.innerHTML='Punten: '+points;
}

