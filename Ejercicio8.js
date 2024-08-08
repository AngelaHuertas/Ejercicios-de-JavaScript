function calcularCosto( dias ){
    let costo   

if (dias === 15) {
        costo = 18000
} else if (dias === 30) {
        costo = 35000
} else if (dias === 90) {
        costo = 86000
} else {
        costo = 'No existe mensualidad establecida'

} return costo

}
let diasCliente = 30
let costoCliente = calcularCosto(diasCliente)

console.log(`El costo para ${diasCliente} días es: ${costoCliente}`)