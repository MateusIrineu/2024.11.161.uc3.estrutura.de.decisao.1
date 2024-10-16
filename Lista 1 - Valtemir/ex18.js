/* Crie um laço for que imprima todos os números de 1 a 20 e, para cada número, use 
if para imprimir também o seu quadrado (por exemplo: "Número 3, Quadrado: 9.") */

/* const prompt = require('prompt-sync')()

let quadrado = 0

for (let i = 1; i <= 20; i++) {
    quadrado = i ** 2
    console.log(`Número ${i}, Quadrado: ${quadrado}`)
} */

const prompt = require('prompt-sync')()

let i = 0
let quadrado = 0

while(i < 20) {
    i++
    quadrado = i ** 2
    console.log(`Número ${i}, Quadrado: ${quadrado}`)
}