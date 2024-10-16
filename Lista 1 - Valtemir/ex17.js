/* Escreva um laço for que imprima a sequência de números de 1 a 30, mas use if para parar
a execução do laço ao encontrar o primeiro número que é maior que 25. */

/* const prompt = require('prompt-sync')()

for(let i = 1; i <= 30; i++) {
    if(i <= 25) {
        console.log(i)
    }
} */

const prompt = require('prompt-sync')()

let i = 0

while(i <= 30) {
    i++
    if(i <= 25) {
        console.log(i)
    }
}