let NomePiloto = prompt('Qual é o seu nome piloto?');

let VelocidadeNave = 0;
let NovaVelocidadeNave = prompt('Gostaria de acelerar até que velocidade?', ' em km/s?');

let Confirmar = confirm('Aguardando confirmação para acelerar até ' + NovaVelocidadeNave + ' km/s');
if(Confirmar == true) {
    VelocidadeNave = NovaVelocidadeNave;
    if(VelocidadeNave <= 0) {
        alert('Nave parada. Considere partir e aumentar a velocidade');
    } else if(VelocidadeNave < 40) {
        alert('Você está devagar, podemos aumentar mais');
    } else if(VelocidadeNave >= 40 && VelocidadeNave < 80) {
        alert('Parece uma boa velocidade para manter');
    }  else if(VelocidadeNave >= 80 && VelocidadeNave < 100) {
        alert('Velocidade alta. Considere diminuir');
    } else {
        alert('Velocidade perigosa. Controle automático forçado');
    }
    alert('O nome do piloto é ' + NomePiloto + ' e está navegando a uma velocidade de ' + VelocidadeNave + 'km/s')
}