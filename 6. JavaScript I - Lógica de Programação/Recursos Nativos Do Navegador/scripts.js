let nome = "Johan";

console.assert(nome);
console.error(nome);
console.warn(nome);
console.log(nome);
console.info(nome);

window.alert(nome);
nome = window.prompt("Insira o seu nome:");
let confirmacao = window.confirm("Deseja confirma está ação???????????");
// Não é necessário utilizar o window
console.log(confirmacao);
console.log(nome);

let x = 5;
let y = 50;

x = x + x - y + 5;
