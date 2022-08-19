let NaveEspacial = prompt('Qual é o nome da nave espacial')
let Ocultador = prompt('Qual caractere deseja substituir?')
let Substituidor = prompt('Por qual caractere deseja substituir')
let NovaNaveEspacial = ""

for (let i = 0; i < NaveEspacial.length; i++) {
    if(NaveEspacial[i] == Ocultador) {
        NovaNaveEspacial += Substituidor
    } else {
        NovaNaveEspacial += NaveEspacial[i]
    }
}
alert('O nome da nova nave espacial é ' + NovaNaveEspacial)