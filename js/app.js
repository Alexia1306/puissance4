// create HTML Tab
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

console.log(matrixTable);
