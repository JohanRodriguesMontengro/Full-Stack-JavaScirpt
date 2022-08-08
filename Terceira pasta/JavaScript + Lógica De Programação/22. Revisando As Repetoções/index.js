let SpaceshipName = prompt('Informe o nome da sua nave:')
let BannedCharacters = "e" || "E" || "o" || "O"
let NewSpaceshipName = ""

for(let i = SpaceshipName.length -1; i >= 0; i--) {
    if(SpaceshipName[i] == BannedCharacters) {
        break
    } else {
        NewSpaceshipName += SpaceshipName[i]
    }
}
alert('O nome da nave é: ' + SpaceshipName + '\nO nome invertido é :' + NewSpaceshipName)