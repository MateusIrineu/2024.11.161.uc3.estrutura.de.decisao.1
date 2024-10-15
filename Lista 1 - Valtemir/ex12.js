/* Crie um laço for que imprima a tabuada de 6 (de 6x1 até 6x10) usando apenas for e 
if */

const prompt = require('prompt-sync')()

let tabuada = 0

for (i = 1; i <= 10; i++) {
    let tabuada = 6 * i
        console.log(`Tabuada do 6: 6 X ${i}: ${tabuada}`)
}