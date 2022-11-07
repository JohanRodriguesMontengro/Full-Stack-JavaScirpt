"use strict";

var arr = ["1\xBA N\xEDvel", ["2\xBA N\xEDvel", 42, true], [["3\xBA N\xEDvel", "1\xBA item", "Ol\xE1 mundo"], ["3\xBA N\xEDvel", "2\xBA item", "Oi, mundo"]], []];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[2]);
console.log(arr[2][1]);
console.log(arr[2][1][0]);
var matriz = [["l1, c1", "l1, c2", "l1, c3", "l1, c4"], ["l2, c1", "l2, c2", "l2, c3", "l2, c4"], ["l3, c1", "l3, c2", "l3, c3", "l3, c4"]];
console.table(matriz);
matriz.push("Nova linha");
matriz[0].push("Nova coluna");
console.log(matriz);

for (var i = 0; i < matriz.length; i++) {
  for (var j = 0; j < matriz[i].length; j++) {
    var Elemento = matriz[i][j];
    console.log("Posi\xE7\xE3o: (".concat(i, ", ").concat(j, "). Valor: ").concat(Elemento));
  }
}