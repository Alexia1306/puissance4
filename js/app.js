// create HTML Tab
var titre = document.getElementsByTagName('h1')[0];


var bodyA = document.getElementsByTagName('body')[0];


var tableA = document.createElement("table");

var trA = [];

for (var j = 0; j < 6; j++) {
    trA[j] = document.createElement("tr");
    trAj = trA[j];
    var tdA = [];
    for (var i = 0; i < 7; i++) {
        tdA[i] = document.createElement("td");
        tdAi = tdA[i];
        trAj.appendChild(tdAi);
    }
    tableA.appendChild(trAj);
}

bodyA.prepend(tableA);

// create array data
var matrixTable = [];

for (var j = 0; j < 6; j++) {
    matrixTable[j] = [];
    for (var i = 0; i < 7; i++) {
        matrixTable[j].push('0');
    }
}
matrixTable[2][3] = "1";

var tableB = document.createElement("table");
var trB = document.createElement("tr");
var tdB = [];
for (var i = 0; i < 7; i++) {
    tdB[i] = document.createElement("td");
    tdBi = tdB[i];
    trB.appendChild(tdBi);
}
tableB.appendChild(trB);
bodyA.prepend(tableB);
console.log(matrixTable);
