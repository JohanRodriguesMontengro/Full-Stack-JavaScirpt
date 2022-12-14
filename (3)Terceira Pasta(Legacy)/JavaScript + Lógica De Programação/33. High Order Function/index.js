/* function
function letAdamLogin() {
    let array =  []
    for(let i = 0; i < 1000000; i++) {
        array.push(i)
    } // processo de autenticação
    return console.log('Access Garanted to Adam')
}
function letMariaLogin() {
    let array =  []
    for(let i = 0; i < 1000000; i++) {
        array.push(i)
    } // processo de autenticação
    return console.log('Access Garanted to Maria')
}

letAdamLogin()
letMariaLogin()
*/
/* function(a,b)
function letUserLogin(user) { // Controlar os dados que estão sendo passados
    let array =  []
    for(let i = 0; i < 1000000; i++) {
        array.push(i)
    } // processo de autenticação
    return console.log(`Acesso garantido ao ${user}`)
}
function letAdminLogin(user) {
    let array =  []
    for(let i = 0; i < 5000000; i++) {
        array.push(i)
    } // processo de autenticação
    return console.log(`Acesso garantido ao ${user}`)
}

letUserLogin('Adam')
letAdminLogin('Jorge')
*/

const giveAccess = (name) => console.log(`Acesso garantido ao ${name}`)

function authenticator(person) {
    let array =  []
    for(let i = 0; i < person; i++) {
        array.push(i)
    }
    return giveAccess(person.name)
}

function dance(person) {
    return console.log('lalalalalalala dancing')
}

function letPerson(person, fn) { // Controlar os dados que estão sendo passados
     if(person.level === 'admin') {
        return fn(person)
     } else if (person.level === 'user') {
        return fn(person)
     }
    return 
}

letPerson({level: 'admin', name: 'Adam'}, dance)