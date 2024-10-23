/* Usando for e if, verifique se um número específico entre 1 e 20 é primo,
imprimindo "É primo" ou "Não é primo" */

const prompt = require('prompt-sync')()

for(i = 2; i <= 20; i++) {
    if(i % 2 === 0 && i > 3) {
        console.log(`${i} não é primo!!!`)
    } else if(i % 3 === 0 && i > 3) {
        console.log(`${i} não é primo!!!`)
    }
    else {
        console.log(`${i} é primo!!!`)
    }
} 

/* const prompt = require('prompt-sync')()

let i = 1

while(i < 30) {
    i++
    if(i % 2 === 0 && i > 3) {
        console.log(`${i} não é primo!!!`)
    } else if(i % 3 === 0 && i > 3) {
        console.log(`${i} não é primo!!!`)
    }
    else {
        console.log(`${i} é primo!!!`)
    }
} */