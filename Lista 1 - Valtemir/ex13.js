/* Escreva um laço for para calcular a soma dos números pares entre 1 e 50 e imprima 
o resultado final. */

const prompt = require('prompt-sync')()

soma = 0

for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        soma = soma + i
        console.log(i)
        
    }
}
console.log(`Resultado: ${soma}`)
