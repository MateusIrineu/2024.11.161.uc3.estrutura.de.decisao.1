/* Usando for e if, imprima todos os números de 1 a 100 que são múltiplos de 7. */

const prompt = require('prompt-sync')()

for (i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`Múltiplos de 7: ${i}`)
    }
}