/* Usando for e if, imprima os números de 1 a 20 e exiba a mensagem "Múltiplo de 5" 
ao lado dos números que são divisíveis por 5 */

/* const prompt = require('prompt-sync')()

for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
        console.log(`Múltiplo de 5: ${i}`)
    } else {
        console.log(i)
    }
} */

const prompt = require('prompt-sync')()

i = 1

while(i < 21) {
    i++
    if(i % 5 === 0) {
        console.log(`Múltiplo de 5: ${i}`)
    }
}