let DistanceLightYear = prompt('Digite a distancia em anos-luz')

confirm('Lista para opções de conversão\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)')

let ChosenOption = prompt('Deseja escolher qual tipo de operação\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)')

switch (ChosenOption) {
    case '1':
        let Parsec = 'Parsec'
        let ParsecConvertedToLightYears = DistanceLightYear * 0.306601
        break;
    case '2':
        let UnidadeAstronômica = 'Unidade astronômica'
        let UnidadeAstronômicaConvertedToLightYears = DistanceLightYear * 63241.1
        break;
    case '3':
        let Quilômetros = 'Quilômetros'
        let QuilômetrosConvertedToLightyears = DistanceLightYear * (9.5 * Math.pow(10, 12))
        alert()
        break;
    default:
        alert('número Invalido')
        break;
}