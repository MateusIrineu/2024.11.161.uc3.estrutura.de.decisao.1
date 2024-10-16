/* Crie um laço for que calcule o fatorial de um número (por exemplo, 5!), imprimindo 
o resultado final. */

/* const prompt = require('prompt-sync')()

multi = 1

for(let i = 5; i >= 1; i--) {
    console.log(i)
    multi = multi * i
}

console.log(`Resultado: ${multi}`) */

const prompt = require('prompt-sync')()

let i = 0
multi = 1

while(i < 5) {
    i++
    multi *= i
}

console.log(`Resultado: ${multi}`)