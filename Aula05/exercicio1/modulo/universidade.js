const { Console } = require("console")

const validacaoMedia = function (numero1, numero2, numero3, numero4) {
    let nota1 = Number((numero1).replace(',', '.'))
    let nota2 = Number((numero2).replace(',', '.'))
    let nota3 = Number((numero3).replace(',', '.'))
    let nota4 = Number((numero4).replace(',', '.'))
    let resultado
    let status = true

    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 || nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log("ERRO: Número invalido, por favor colocar um número abaixo de 100 e acima de 0")
        status = false
    } else if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log("ERRO: Por Favor preencha todos os campos")
        status = false
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log("ERRO: Coloque um número valido")
        status = false
    } else if (status == true) {
        resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
        console.log(resultado)
    } if (resultado >= 70) {
        console.log('Aluno aprovado')
    }else if (resultado <= 50) {
        console.log('Aluno Reprovado')
    }return resultado
}

const mediaExame = function (exame){
    let exameA = exame
    let status = true
    let resultado

    if (exameA == "") {
        console.log("ERRO: Por Favor preencha todos os campos")
        status = false
    }else if (isNaN(nota)){
        console.log("ERRO: Coloque um número valido")
        status = false
    }else if (exameA <= 50|| exameA >= 69){
        console.log("Esse Aluno vai ter que fazer o exame")
    }
    return status
}

const alunoProfessor = function (aluno,Professor,sexoA, sexoP){
    let aluno2 = aluno
    let Professor1= Professor
    let sexoAluno = sexoA
    let sexoProfessor = sexoP

    if (Professor1== ""|| aluno2=="") {
        console.log("ERRO: Por Favor preencha todos dos campos")
    }else if(Professor1 > 1){
        Professor1.replace('Porfessor', 'Professora')
    }

}

module.exports = {
    validacaoMedia,
    mediaExame,
    alunoProfessor
}