const prompt = require('prompt-sync')()

let email
let senha

do {
    email = prompt("Digite seu email (para sair digite 'sair'):")
    senha = prompt("Digite seu senha (para sair digite 'sair'):")
} while (email !== "fulano@email.com" || senha !== "123456")
