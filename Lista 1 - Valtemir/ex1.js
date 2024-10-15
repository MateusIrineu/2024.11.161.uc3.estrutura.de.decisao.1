/* Usando for e if, imprima os números de 1 a 20, indicando ao lado de cada número 
se ele é "par" ou "ímpar". */

const prompt = require('prompt-sync')()

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`Par: ${i}`)
    } else {
        console.log(`Ímpar: ${i}`)
    }
}