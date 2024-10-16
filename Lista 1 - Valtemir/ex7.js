/* Escreva um laço for que imprima todos os números de 1 a 30, mas use if para pular 
os números que são múltiplos de 3 */

/* const prompt = require('prompt-sync')()

for (let i = 1; i <= 30; i++) {
    if (i % 3 != 0) {
        console.log(`Pulando os múltiplos de 3: ${i}`)
    }
} */

const prompt = require('prompt-sync')()

let i = 0

while(i < 30) {
    i++
    if(i % 3 != 0) {
        console.log(`Pulando os múltiplos de 3: ${i}`)
    }
}