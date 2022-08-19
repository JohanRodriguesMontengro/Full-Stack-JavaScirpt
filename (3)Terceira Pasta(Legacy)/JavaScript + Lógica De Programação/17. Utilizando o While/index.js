let NaveNome = prompt('Informe qual é o nome da nave?')
let DobraEspacial = 0
let Continuar = "1"

while (Continuar == '1') {
    Continuar = prompt('Deseja fazer uma Dobra Espacial \n1- Sim\n2- Não\n\n(Digite o número  da opção desejada)')
    if(Continuar == '1') {
        DobraEspacial += 1
    }
}
alert('O nome da nave é ' + NaveNome + '. E o número de vezes seguidas que a dobra espacial foi realizada \nfoi de: ' + DobraEspacial + ' vezes')