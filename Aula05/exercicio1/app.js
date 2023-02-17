/************************************
 * Objetivo: Gerenciamento de média
 * Autor: Gustavo 
 * Data: 10/02/2023
 * Versão:1.0
 ***********************************/

var readline = require('readline')
var media = require('./modulo/universidade.js');
const { Console } = require('console');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Nome do professor (A): \n', function (professor) {
    entradaDados.question('Sexo do professor(A): \n 1- M ou 2- F\n', function (sexoP) {



        entradaDados.question('Digite a Primeira nota:\n', function (nota1) {
            let numero1 = nota1
            entradaDados.question('Digite a Segunta nota:\n', function (nota2) {
                let numero2 = nota2
                entradaDados.question('Digite a Terceira nota:\n', function (nota3) {
                    let numero2 = nota3
                    entradaDados.question('Digite a Quarta nota:\n', function (nota4) {
                        let numero2 = nota4
                        let resultado = media.validacaoMedia(nota1, nota2, nota3, nota4)

                        console.log(resultado)

                        if (resultado >= 50 && resultado <= 69) {

                            console.log("Esse aluno vai fazer o exame")
                            entradaDados.question("Digite a nota do exame:\n", function (exameA) {


                                resultado = media.mediaExame(exameA)
                                console.log(resultado)




                            })


                        }
                    })
                })

            })
        })

    })
})






