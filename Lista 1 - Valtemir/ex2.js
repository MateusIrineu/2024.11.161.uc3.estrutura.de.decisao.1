/* Crie um laço for para imprimir apenas os números ímpares de 1 a 30. */

/* const prompt = require('prompt-sync')()

for (let i = 1; i <= 30; i++) {
    if (i % 2 != 0) {
        console.log(`Ímpares: ${i}`)
    }
} */

const prompt = require('prompt-sync')()

i = 1

while(i <= 30) {
    if(i % 2 !== 0) 
        console.log(`Ìmpares: ${i}`)
    i++
    
}