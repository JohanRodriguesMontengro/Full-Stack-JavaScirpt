function Dobro(x) {
  alert(`O dobro de ${x} é (${x * 2})`);
}

Dobro(5);
Dobro(7);
Dobro();

function Ola(nome = `Mundo`) {
  alert(`Olá ${nome}!`);
}

Ola(`Johan`);
Ola();

function Soma(a = 1, b = 2) {
  alert(`Resultado da soma ${a + b}`);
}

Soma(7, 9);
Soma(1, 1);
Soma();

function Soma5Números(a = 4, b = 3, c = 1, d = 9, e = 4) {
  alert(`Resultado da soma ${a + b + c + d + e}`);
}

Soma5Números(1, 5, 6, 4, 3)
Soma5Números(1, 5, 45, 7, 99)
Soma5Números()

function CriarUsuário(nome, email, senha, tipo = `Administrador`) {
  const Usuario = {
    nome, // Mesmo que nome: nome,
    email,
    senha,
    tipo,
  }
  console.log(Usuario)
}

// function NovoUsuario(nome, tipo = `Admin`, email, senha) {
//   const Usuario = {
//     nome, // Mesmo que nome: nome,
//     email,
//     senha,
//     tipo,
//   }
//   console.log(Usuario)
// } 


CriarUsuário(`Johan`, `Johan@email.com`, `NoaH2022`)
CriarUsuário(`Johan@email.com`, `Johan`, `1234`)
// NovoUsuario(`Johan`, `Admin` `Johan@email.com`, `1234`)

function MuitosParâmetros(nome, telefone, endereço, aniversario, email, senha) {
  // ...
}

function ObjetoComoParâmetro(Usuario) {
  // ...
  Usuario.nome
  Usuario.email
}
const DadosDoUsuario = {
  nome: ``,
  telefone: ``,
  endereço: ``,
  aniversario: ``,
  email: ``,
  senha: ``
}

MuitosParâmetros(`Nome`, `Telefone`, `Endereço`, `Aniversario`, `Email`, `Senha`)
ObjetoComoParâmetro(DadosDoUsuario)