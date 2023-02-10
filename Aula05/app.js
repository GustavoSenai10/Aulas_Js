/************************************
 * Objetivo: Gerenciamento de média
 * Autor: Gustavo 
 * Data: 10/02/2023
 * Versão:1.0
 ***********************************/

var readline = require('readline')
var media =require ('./modulo/media.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite a primeira nota:\n', function (nota1) {
    let numero1 = nota1
    entradaDados.question('Digite a segunta nota:\n', function (nota2) {
        let numero2 = nota2
        entradaDados.question('Digite a segunta nota:\n', function (nota3) {
            let numero2 = nota3
            entradaDados.question('Digite a segunta nota:\n', function (nota4) {
                let numero2 = nota4
                let resultado= media.media(nota1 ,nota2 ,nota3,nota4)

            })
        })

    })
})
