let genero = "F"
let edad = 40

if (genero === "F" && edad > 50 ){
console.log("Su ayuda mensual es 120000")
} else if (genero ==="F" && edad >= 30 && edad<=50  ){
console.log("Su ayuda mensual es de 100000")
} else if(genero !== "F"){
    console.log("su ayuda mensual es 40000")
} else {
    console.log("No es apto para recibir ayuda") 
}