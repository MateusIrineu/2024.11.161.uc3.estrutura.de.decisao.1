/* crieum algoritmo que receba 6 numeros
e imprima a sua media aritmética */

const prompt = require('prompt-sync')()

soma = 0

const limite = prompt(`Insira o limite: `)

for(let i = 1; i <= limite; i++) {
    let numero = parseInt(prompt(`Digite o número ${i}: `))
    soma += numero
} 

const media = soma / limite

console.log(`O resultado é: ${media}`)
