// create HTML Tab
var titre = document.getElementsByTagName('h1')[0];
var bodyA = document.getElementsByTagName('body')[0];
var tableA = document.createElement("table");


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

bodyA.prepend(tableA);

var tableB = document.createElement("table");
var trB = document.createElement("tr");
var tdB = [];
for (var i = 0; i < 7; i++) {
    tdB[i] = document.createElement("td");
    tdBi = tdB[i];
    tdBi.classList.add('tableB');
    tdBi.id = i;
    tdBi.addEventListener('click',function() {
      if (trA[5][this.id].style.backgroundColor == "grey") {
        trA[5][this.id].style.backgroundColor = "blue";
      } else if (trA[4][this.id].style.backgroundColor == "grey"){
        trA[4][this.id].style.backgroundColor = "blue";
      } else if (trA[3][this.id].style.backgroundColor == "grey"){
        trA[3][this.id].style.backgroundColor = "blue";
      } else if (trA[2][this.id].style.backgroundColor == "grey"){
        trA[2][this.id].style.backgroundColor = "blue";
      } else if (trA[1][this.id].style.backgroundColor == "grey"){
        trA[1][this.id].style.backgroundColor = "blue";
      } else {
        trA[0][this.id].style.backgroundColor = "blue";
      }
    });

    trB.appendChild(tdBi);
}
tableB.appendChild(trB);
bodyA.prepend(tableB);

console.log(trA[5][1]);
