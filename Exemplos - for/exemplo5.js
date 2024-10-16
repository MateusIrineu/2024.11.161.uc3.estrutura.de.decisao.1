/* Implemente um programa que mostre todos os números múltiplos
de 3 entre 1 e 50 */

const prompt = require('prompt-sync')()

for (let i = 1; i <= 50; i++) {
    if ( i % 3 === 0){
        console.log(`Múltiplos de 3: ${i}`)
    }
}
