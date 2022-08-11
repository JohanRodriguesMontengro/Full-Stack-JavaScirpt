function slowDown(velocity, printer) {
    let decelerator = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= decelerator
    }
    alert('As comportas estão abertas')
}
let newVelocity = 150

let printerVelocity = slowDown(newVelocity, (printer) =>{
    console.log(`Nova velocidade ${printer}km/s`)
})