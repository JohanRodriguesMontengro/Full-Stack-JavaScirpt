let pessoa = {
  nome: `Johan`,
  idade: 26,
  dizerOla() {
    alert(`Olá, mundo! Meu nome é ${this.nome}`)
  }
}

console.log(pessoa)

pessoa.dizerOla()