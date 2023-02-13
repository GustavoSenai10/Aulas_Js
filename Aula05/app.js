/************************************
 * Objetivo: Gerenciamento de média
 * Autor: Gustavo 
 * Data: 10/02/2023
 * Versão:1.0
 ***********************************/

var readline = require('readline')
var media = require('./modulo/universidade.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Nome do Professor(a): \n', function (professor) {
    let nomeP = professor
    entradaDados.question('sexo do professor M ou F: \n', function (sexop) {
        let sexo = sexop
        entradaDados.question('Nome do aluno (a): \n', function (aluno) {
            let nomeA = aluno
            entradaDados.question('sexo do aluno M ou F: \n', function (sexoa) {
                let sexoA = sexoa

                let form = media.validacaoAlunoEProfessor(professor, aluno, sexoa, sexop)
                console.log(form)
                


                entradaDados.question('Digite a Primeira nota:\n', function (nota1) {
                    let numero1 = nota1
                    entradaDados.question('Digite a Segunta nota:\n', function (nota2) {
                        let numero2 = nota2
                        entradaDados.question('Digite a Terceira nota:\n', function (nota3) {
                            let numero2 = nota3
                            entradaDados.question('Digite a Quarta nota:\n', function (nota4) {
                                let numero2 = nota4
                                
                                let resultado = media.validacaoMedia(nota1, nota2, nota3, nota4,exameA)
                                console.log(resultado)
                                
                                    entradaDados.question('Insira a nota do exame\n',function(exameA){
                                        let exame = exameA  
                                        
                                    })
                                   
                                
                                
                                
                                
                            })
                        })

                    })
                })

            })
        })
    })
})