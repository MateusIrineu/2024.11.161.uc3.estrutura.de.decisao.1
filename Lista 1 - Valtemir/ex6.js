/* Crie um laço for que imprima os números de 2 a 20 em incrementos de 2. Use 
apenas for e if para garantir que o número seja par antes de imprimi-lo. */

const prompt = require('prompt-sync')()

for (let i = 2; i <= 20; i = i + 2) {
        console.log(`De 2 em 2: ${i}`)
}
