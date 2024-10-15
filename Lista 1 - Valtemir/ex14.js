/* Usando for, if e else, imprima os números de 1 a 20 e, para cada número imprima se ele é "menor que 10" ou "maior que 10"*/

const prompt = require('prompt-sync')()

for(i = 1; i <= 20; i++) {
    if(i < 10) {
        console.log(`${i} é menor que 10.`)
    } else if(i == 10) {
        console.log(`${i} é igual a 10.`)
    } 
    else {
        console.log(`${i} é maior que 10.`)
    }
}