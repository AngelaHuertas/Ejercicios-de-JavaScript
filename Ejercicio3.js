function calcularCosto(tipoLavadora, horas, cantidad) {
    const precioGrande = 4000
    const precioPequena = 3000
    let costoTotal = 0
  
    if (tipoLavadora === 1) {
      costoTotal = precioGrande * horas * cantidad
    } else if (tipoLavadora === 2) {
      costoTotal = precioPequena * horas * cantidad
    } else {
      console.log("Tipo de lavadora no válido. Use 1 para grande y 2 para pequeña.")
    }
  
    if (cantidad >= 3) {
      const descuento = costoTotal * 0.03
      costoTotal -= descuento
    }
  
    return costoTotal
  }
  
  
  let tipoLavadora = 2
  let horas = 5
  let cantidad = 3
  
  const costo = calcularCosto(tipoLavadora, horas, cantidad)
  console.log(`El costo total a pagar es: ${costo} pesos`)