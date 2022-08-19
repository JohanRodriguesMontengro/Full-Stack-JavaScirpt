let DepartureDateEntry = prompt('Digite a data de partida (formata DD/MM/YYYY)')

let DepartureDate = moment(DepartureDateEntry, "DD/MM/YYYY")

let Today = moment()

let DateDiff = Today - DepartureDate

let ChosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(ChosenOption == 1) {
    let SecondsOfDeparture = Math.round(DateDiff / 1000)
    alert('Tempo de vôo: ' + SecondsOfDeparture + ' Segundos')
} else if(ChosenOption == 2) {
    let MinutesOfDeparture = Math.round(DateDiff / 1000 / 60)
    alert('Tempo de vôo: ' + MinutesOfDeparture + ' Minutos')
} else if(ChosenOption == 3) {
    let HoursOfDeparture = Math.round(DateDiff / 1000 / 3600)
    alert('Tempo de vôo: ' + HoursOfDeparture + ' Horas')
} else if(ChosenOption == 4) {
    let DaysOfDeparture = Math.round(DateDiff / 1000 / 3600 / 24)
    alert('Tempo de vôo: ' + DaysOfDeparture + ' Dias')
} else {
    alert('Opção inválida')
}