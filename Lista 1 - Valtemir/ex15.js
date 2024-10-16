/* Crie um laço que imprima todos os números de 1 a 20, mas use if para pular os números que não são
múltiplos de 2 e 3 ao mesmo tempo*/

/* const prompt = require('prompt-sync')()

for(i = 1; i <= 20; i++) {
    if(i % 2 === 0 && i % 3 === 0) {
        console.log(i)
    }
} */

const prompt = require('prompt-sync')()

let i = 0

while(i <= 20) {
    i++
    if(i % 2 === 0 && i % 3 === 0) {
        console.log(i)
    }
}