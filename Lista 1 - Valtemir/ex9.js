/* Crie um laço for que calcule o fatorial de um número (por exemplo, 5!), imprimindo 
o resultado final. */

const prompt = require('prompt-sync')()

multi = 1

for(let i = 5; i >= 1; i--) {
    console.log(i)
    multi = multi * i
}

console.log(`Resultado: ${multi}`)
