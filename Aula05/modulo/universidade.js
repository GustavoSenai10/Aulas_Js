const { Console } = require("console")

const validacaoMedia = function (numero1, numero2, numero3, numero4,exameA) {
    let nota1 = Number((numero1).replace(',', '.'))
    let nota2 = Number((numero2).replace(',', '.'))
    let nota3 = Number((numero3).replace(',', '.'))
    let nota4 = Number((numero4).replace(',', '.'))
    let exame = Number((exameA))
    let resultado
    let status = true

    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 || nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        status = false
    } else if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        status = false
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        status = false
    } else if (status == true) {
        resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
        console.log(resultado)
    } if (resultado > 70) {
        console.log('Aluno aprovado')
    } else if (resultado >= 50 && resultado <= 69) {
        status = true
    } else if (resultado < 50) {
        console.log('Aluno Reprovado')
    }
    return status
}




const validacaoAlunoEProfessor = function (professor, aluno, sexoa, sexop) {
    let Professora = String
    let Aluna = String
    let sexoP = String
    let sexoA = String
    let status = true
    
    if (professor == " "|| aluno== " "||sexoa==" "|| sexop==" ") {
        status = false
    } else if  (isNaN(professor)|| isNaN (aluno)|| isNaN (sexop)|| isNaN(sexoa)) {
        status = false
    }else if (sexoa == "F"){
        aluno.replace("aluno","Aluna")
    }


    return status
}



module.exports = {
    validacaoMedia,
    validacaoAlunoEProfessor
}