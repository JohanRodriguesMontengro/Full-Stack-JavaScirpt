"use strict";

var spaceship = "Elemental";
var velocity = 20;
/*
// Algumas operações Lógicas
// Operador "&&"(e) 
console.log(spaceship.length == 9 && velocity > 15); // ==> true: Verdadeiro e Verdadeiro = Verdadeiro
console.log(velocity > 10 && velocity < 19); // ==> false: Verdadeiro e Falso = Falso
console.log(velocity < 17 && spaceship == "Elemental"); // ==> false: Falso e Verdadeiro = Falso
console.log(spaceship == "Golias" && velocity > 21); // ==> false: Falso e Falso = Falso

// Operador "||"(ou)
console.log(spaceship.length == 9 || velocity > 15); // ==> true: Verdadeiro ou Verdadeiro = Verdadeiro
console.log(velocity > 10 || velocity < 19); // ==> true: Verdadeiro ou Falso = Verdadeiro
console.log(velocity < 17 || spaceship == "Elemental"); // ==> true: Falso ou Verdadeiro = Verdadeiro 
console.log(spaceship == "Golias" || velocity > 21); // ==> false: Falso ou Falso = Falso
*/
// Operador !(Não)

console.log(!(velocity > 19)); // ==> false: Não Verdadeiro = Falso

console.log(!(spaceship == "Golias")); // ==> false: Não Falso = Verdadeiro