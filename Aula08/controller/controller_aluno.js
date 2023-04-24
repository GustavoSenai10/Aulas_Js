/***************************************************************************************
 * OBJETIVO: Responsavel pela Regra de negocio referente ao CRUD de alunos 
 * DATA: 14/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/



//Inserir o novo Aluno
const inserirAluno = function (dadosAluno) {

}

//Atualizar um Aluno existente 
const atualizarAluno = function (dadosAluno) {

}

//Excluir um aluno existente
const deletarAluno = function (id) {

}

//Retorna a lista de todos os alunos 
const getAlunos = async function () {

    let dadosAlunosJson = {}

    //importe do arquivo DAO para acessar dados do aluno no BD 
    let alunosDAO = require('../model/DAO/alunoDAO.js')

    //Chama a função do arquivo DAO que irá retronar todos os registros do BD 
    let dadosAluno = await alunosDAO.selectAllAlunoID()

    if (dadosAluno) {
        //Criando o Json com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJson.quantidade = dadosAluno.length
        dadosAlunosJson.alunos = dadosAluno
        return dadosAlunosJson
    } else {
        return false
    }

}

//Retorna Filtrando Pelo ID 
const getBuscarAlunoID = async function (id) {
    let idAlunosJson = {}

    let idAlunosDAO =  require ('../model/DAO/alunoDAO.js')

    let idAlunos = await  idAlunosDAO.selectBYAlunoID()

    if (idAlunos){
       
        idAlunosJson.alunos = idAlunos
        return idAlunosJson
    }else{
        return false
    }

}

module.exports = {
    getAlunos,
    getBuscarAlunoID
}