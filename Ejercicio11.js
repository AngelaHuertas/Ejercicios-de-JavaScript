let pitidoSuena = false
let discoGira= false



if(pitidoSuena === true && discoGira === true ) {console.log("Póngase en contacto con el técnico apoyo")  }
else if(pitidoSuena === true && discoGira === false ){
    console.log("Verificar contactos de la unidad")
}else if(pitidoSuena === false && discoGira === false){
    console.log("Traiga la computadora para repararla en la central")
}else if (pitidoSuena === false && discoGira === true){
    console.log(" Compruebe las conexiones de altavoces ")
} else {
    console.log("ingrese un valor valido")
}