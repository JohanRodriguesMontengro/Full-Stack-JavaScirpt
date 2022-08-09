let ship = {
    shipName: prompt(`Qual é o nome da sua nave piloto?: `),
    velocity: 0
  }
  let chosenOption = ``
  
  function speedUp() {
    alert(`Acelerando mais 5km/s de velocidade!`)
    return ship.velocity += 5
  }
  
  function speedDown() {
    if (velocity <= 0) {
      alert(`Você está parado, não é possível desacelerar!`)
      return ship.velocity = 0
    } else {
      alert(`Desacelerando mais 5km/s de velocidade!`)
      return ship.velocity -= 5
    }
  }
  
  function printInfo() {
    alert(`O nome da sua nave é: ${ship.shipName}\nSua velocidade atual é de: ${ship.velocity}km/s`)
  }
  
  function exit() {
    alert(`Finalizando o programa...`)
  }
  
  do {
    chosenOption = prompt(
      `Escolha uma opção\n1 - Acelerar a nave em 5 km/h\n2 - Desacelerar a nave em 5 km/h\n3 - Imprimir dados de bordo\n4 - Sair do programa`)
      
    switch (chosenOption) {
      case '1':
        velocity = speedUp()
      break;
      case '2':
        velocity = speedDown()
      break
      case '3':
        printInfo()
      break;
      case '4':
        exit()
      break;
      default:
        alert(`Escolha uma opção valida!`)
        break;
    }
  } while (chosenOption != 4);