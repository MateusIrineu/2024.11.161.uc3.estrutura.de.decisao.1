/* Escreva um laço for que percorra os números de 1 a 20 e use if para imprimir "Fizz" 
para números múltiplos de 3 e "Buzz" para números múltiplos de 5. Imprima 
"FizzBuzz" para números que são múltiplos de ambos */

const prompt = require('prompt-sync')()

for (i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz: ${i}`)
    } else if (i % 5 === 0) {
        console.log(`Buzz ${i}`)
    } else if (i % 3 === 0) {
        console.log(`Fizz: ${i}`)
    }
}