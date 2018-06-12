// create HTML Tab
var titre = document.getElementsByTagName('h1')[0];
var bodyA = document.getElementsByTagName('body')[0];
var tableA = document.createElement("table");

var matrixTable = [];
var trA = [];

for (var j = 0; j < 6; j++) {
    matrixTable[j] = [];
    trA[j] = document.createElement("tr");
    trAj = trA[j];
    var tdA = [];
    for (var i = 0; i < 7; i++) {
        matrixTable[j].push('0');
        tdA[i] = document.createElement("td");
        tdAi = tdA[i];
        tdAi.classList.add('tableA');
        tdAi.innerHTML = "0";
        trAj.appendChild(tdAi);
    }
    tableA.appendChild(trAj);
}

bodyA.prepend(tableA);



matrixTable[2][3] = "1";
matrixTable[0][3] = "5";

var tableB = document.createElement("table");
var trB = document.createElement("tr");
var tdB = [];
for (var i = 0; i < 7; i++) {
    tdB[i] = document.createElement("td");
    tdBi = tdB[i];
    tdBi.classList.add('tableB');
    tdBi.id = i;
    tdBi.addEventListener('click',function() {
        matrixTable[5][i] = "1";
        console.log(matrixTable);
    }
    )

    trB.appendChild(tdBi);
}
tableB.appendChild(trB);
bodyA.prepend(tableB);

unTd = document.getElementsByClassName('tableA');
console.log(unTd);

// function addJetons(id) {
//     matrixTable[5] = "1";
// }
