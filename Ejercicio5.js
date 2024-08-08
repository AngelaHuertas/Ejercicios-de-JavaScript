let matematicas = (8 + 3 + 9 + 6 + 7) / 5
let informatica = (5 + 4 + 9 + 2 + 10) / 5
let fisica = (5 + 9 + 4 + 7 + 5) / 5
let quimica = (6 + 5 + 8 + 9 + 5) / 5
let biologia = (8 + 9 + 4 + 5 + 5) / 5

let cali = (matematicas + informatica + fisica + quimica + biologia) / 5

if (cali <= 5.9) {
    console.log(`Su promedio es de ${cali} por lo tanto es Mala`)
} else if (cali <= 8) {
    console.log(`Su promedio es de ${cali} por lo tanto es Buena`)
} else if (cali > 8) {
    console.log(`Su promedio es de ${cali} por lo tanto es Excelente`)
}
