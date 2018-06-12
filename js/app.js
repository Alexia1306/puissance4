// create HTML Tab

var mainElmt = document.getElementsByTagName('main')[0];
var tableA = document.createElement("table");
var joueur = 1;
var title = document.createElement("h1");
title.innerHTML = "puissance 4";


var trA = [];

for (var j = 0; j < 6; j++) {
    trA[j] = document.createElement("tr");
    trAj = trA[j];
    for (var i = 0; i < 7; i++) {
        trA[j][i] = document.createElement("td");
        tdAi = trA[j][i];
        tdAi.classList.add('tableA');
        tdAi.style.backgroundColor = "grey";
        trAj.appendChild(tdAi);
    }
    tableA.appendChild(trAj);
}

mainElmt.prepend(tableA);

var tableB = document.createElement("table");
var trB = document.createElement("tr");
var tdB = [];
for (var i = 0; i < 7; i++) {
    tdB[i] = document.createElement("td");
    tdBi = tdB[i];
    tdBi.classList.add('tableB');
    tdBi.id = i;
    tdBi.addEventListener('click', function() {
        if (joueur == 1) {
          color = "blue";
            joueur = 2;
        } else if (joueur ==2) {
          color = "red";
            joueur = 1;
        }
        for (var i = 5; i >= 0; i--) {

            if (trA[i][this.id].style.backgroundColor == "grey") {
                trA[i][this.id].style.backgroundColor = color;
                break;
            }
        }
        console.log(joueur);
    });


    trB.appendChild(tdBi);
}
tableB.appendChild(trB);
mainElmt.prepend(tableB);
mainElmt.prepend(title);

console.log(trA[5][1]);
