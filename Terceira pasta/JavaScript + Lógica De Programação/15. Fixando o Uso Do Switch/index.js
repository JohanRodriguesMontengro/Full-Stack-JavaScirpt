let DistanceLightYear = prompt('Digite a distancia em anos-luz')

confirm('Lista para opções de conversão\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)')

let ChosenOption = prompt('Deseja escolher qual tipo de operação\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)\n\n(Digite o número da opção desejada)')

switch (ChosenOption) {
    case '1':
        let Parsec = ' Parsec'
        let ParsecConvertedToLightYears = DistanceLightYear * 0.306601
        alert('Distância digitada em anos-luz ' + DistanceLightYear + ', a conversão desejada foi' + Parsec + '. E a distância convertida foi de ' + ParsecConvertedToLightYears + Parsec)
        break;
    case '2':
        let UnidadeAstronômica = ' Unidade astronômica'
        let UnidadeAstronômicaConvertedToLightYears = DistanceLightYear * 63241.1
        alert('Distância digitada em anos-luz ' + DistanceLightYear + ', a conversão desejada foi' + UnidadeAstronômica + '. E a distância convertida foi de ' + UnidadeAstronômicaConvertedToLightYears + UnidadeAstronômica)
        break;
    case '3':
        let Quilômetros = ' Quilômetros'
        let QuilômetrosConvertedToLightyears = 9.5 * Math.pow(10,12) * DistanceLightYear
        alert('Distância digitada em anos-luz ' + DistanceLightYear + ', a conversão desejada foi' + Quilômetros + '. E a distância convertida foi de ' + QuilômetrosConvertedToLightyears + Quilômetros)
        break;
    default:
        alert('Distância digitada em anos-luz ' + DistanceLightYear + ', Unidade não identificada: Conversão fora do escopo')
        break;
}