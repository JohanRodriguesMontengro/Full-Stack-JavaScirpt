function Somar(a, b) {
  return a + b;
}

let Operacao = Somar;

console.log(Operacao(4, 5));

Operacao = function (a, b) {
  return a - b;
};

console.log(Operacao(4, 5))


OlaMundo()

function OlaMundo() {
  alert(`Olá, mundo`)
}

const OiMundo = function () { 
  alert(`Oi, mundo`)
}

OiMundo()