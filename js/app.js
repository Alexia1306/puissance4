// create HTML Tab
var titre = document.getElementsByTagName('h1')[0];
var mainElmt = document.getElementsByTagName('main')[0];
var tableA = document.createElement("table");
var joueur = 1;


var trA = [];

for (var j = 0; j < 6; j++) {
  trA[j] = document.createElement("tr");
  trAj = trA[j];
  for (var i = 0; i < 7; i++) {
    trA[j][i] = document.createElement("td");
    tdAi = trA[j][i];
    // tdAi.classList.add('tableA');
    tdAi.style.backgroundColor = "grey";
    trAj.appendChild(tdAi);
  }
  tableA.appendChild(trAj);
}

mainElmt.prepend(tableA);

var tableB = document.createElement("table");
mainElmt.className = "player_1";
var trB = document.createElement("tr");
var tdB = [];
for (var i = 0; i < 7; i++) {
  tdB[i] = document.createElement("td");
  tdBi = tdB[i];
  tdBi.id = i;
  tdBi.addEventListener('click', function() {
    if (joueur == 1) {
      mainElmt.className = "player_2";
      color = "blue";
      joueur = 2;
    } else if (joueur == 2) {
      mainElmt.className = "player_1";
      color = "red";
      joueur = 1;
    }
    for (var i = 5; i >= 0; i--) {
      if (trA[i][this.id].style.backgroundColor == "grey") {
        trA[i][this.id].style.backgroundColor = color;
        for (var j = 0; j < 4; j++) {
          if (trA[i][j].style.backgroundColor == color && trA[i][j+1].style.backgroundColor == color && trA[i][j+2].style.backgroundColor == color && trA[i][j+3].style.backgroundColor == color) {
            if (!alert('victoire de ' + color + '!')) {
              window.location.reload()
            }
          }
        }
        if (i < 3) {
          if (trA[i + 1][this.id].style.backgroundColor == color && trA[i + 2][this.id].style.backgroundColor == color && trA[i + 3][this.id].style.backgroundColor == color) {
            if (!alert('victoire de ' + color + '!')) {
              window.location.reload()
            }
          }
          if (this.id > 2) {
            if (trA[i + 1][this.id - 1].style.backgroundColor == color && trA[i + 2][this.id - 2].style.backgroundColor == color && trA[i + 3][this.id - 3].style.backgroundColor == color) {
              if (!alert('victoire de ' + color + '!')) {
                window.location.reload()
              }
            }
          }
          if (this.id < 4) {
            if (trA[i - 1][this.id + 1].style.backgroundColor == color && trA[i - 2][this.id + 2].style.backgroundColor == color && trA[i - 3][this.id + 3].style.backgroundColor == color) {
              if (!alert('victoire de ' + color + '!')) {
                window.location.reload()
              }
            }
          }
        }
        break;
      }
    }
  });


  trB.appendChild(tdBi);
}
tableB.appendChild(trB);
mainElmt.prepend(tableB);
