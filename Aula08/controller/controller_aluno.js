/***************************************************************************************
 * OBJETIVO: Responsavel pela Regra de negocio referente ao CRUD de alunos 
 * DATA: 14/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/

 //importe do arquivo DAO para acessar dados do aluno no BD 
 var alunosDAO = require('../model/DAO/alunoDAO.js')

 //importe de configuração das variáves , funções, constantes e funções gerais  
var messege = require('./modulo/config.js')


//Inserir o novo Aluno
const inserirAluno =  async function (dadosAluno) {
    
    // Validação para tratar campos obrigatorios e quantidade de caracteres 
    if( dadosAluno.nome == ""             || dadosAluno.nome == undefined            || dadosAluno.nome.length > 100           ||
        dadosAluno.rg == ""               || dadosAluno.rg == undefined              || dadosAluno.rg.length > 15              || 
        dadosAluno.cpf == ""              || dadosAluno.cpf == undefined             || dadosAluno.cpf.length > 18             || 
        dadosAluno.data_nascimento == ""  || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 || 
        dadosAluno.email == ""            || dadosAluno.email == undefined           || dadosAluno.email.length > 100          
    )
    {
        return messege.ERRO_REQUIRED_FIELD
    }else{
        //envia os dados para model, para inserir no Banco de Dados
        let resultDadosAlunos = await alunoDAO.inserirAluno(dadosAluno)

        //Valida se o Banco de dados inseriu corretaemnte od dados
        if (resultDadosAlunos) {
            return messege.SUCCESS_CREATD_ITEM
        }else{
            return messege.ERRO_INTERNAL_SERVER
    
        }    
    }

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
   

}

module.exports = {
    getAlunos,
    inserirAluno
}