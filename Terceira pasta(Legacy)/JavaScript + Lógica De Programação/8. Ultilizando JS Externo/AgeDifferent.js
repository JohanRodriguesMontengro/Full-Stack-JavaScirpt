alert('Digite a seguir o nome e a idade de duas pessoas e comparar as idades');

let NameOlderPerson = prompt('Qual é o nome da pessoa mais velha?');
let AgeOlderPerson = prompt('Qual é a idade da pessoa mais velha?');

let NameYoungerPerson = prompt('Qual é o nome da pessoa mais nova?');
let AgeYoungerPerson = prompt('Qual é a idade da pessoa mais nova?');

let AgeDifference = AgeOlderPerson - AgeYoungerPerson;

alert('O nome da pessoa mais velha é ' + NameOlderPerson + ', e ele(a) tem ' + AgeOlderPerson + ' anos!');
alert('O nome da pessoa mais nova é ' + NameYoungerPerson + ', e ele(a) tem ' + AgeYoungerPerson + ' anos!');
alert('A diferença de idade de ' + NameOlderPerson + ' para ' + NameYoungerPerson + ' é de ' + AgeDifference + ' anos!')