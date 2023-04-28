/***************************************************************************************
 * OBJETIVO: Responsavel pela manipulação de dados dos ALUNOS no banco de dados
 * DATA: 14/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/

//import da biblioteca do prisma client
var { PrismaClient, Prisma } = require('@prisma/client')

//Instancia da classe PrismaClient 
var Prisma = new PrismaClient()

//Inserir o novo Aluno
const inserirAluno =  async function (dadosAluno) {
    //script sql para inserir dados
    let sql = `insert into tbl_aluno(

        nome,
        rg,
        cpf,
        data_nascimento,
        email
        ) valeus (
        '${dadosAluno.nome}',
        '${dadosAluno.rg}',
        '${dadosAluno.cpf}',
        '${dadosAluno.data_nascimento}',
        '${dadosAluno.email}',
    )`
  
    //Execulta o script no MySql
    let resultstatus = await Prisma.$executeRawUnsafe(sql)
  
    if(resultstatus)
        return true;
    else
        return false

}

//Atualizar um Aluno existente 
const updataAluno = function (dadosAluno) {

}

//Deletar um aluno existente
const deletarAluno = function (id) {

}

//Retorna a lista de todos os alunos 
const getAlunos = function () {

}

//Retorna Todos os alunos pelo banco de dados  
const selectAllAlunoID = async function (id) {

    //ScriptSQL para buscar todos os itens no DB
    let sql = 'select * from tbl_aluno'

    //$queryRawUnsafe() permite interpretar uma variável como sendo um ScriptMYSQL
    //$queryRaw('select * from tbl_aluno') - permite interpretar o script sql direto no metodo 
    let rsAluno = await Prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retornou algum registro
    if (rsAluno.length > 0)
        return rsAluno
    else
        return false



}

//Retorna o aluno filtrado pelo ID  
const selectBYAlunoID = async function (id) {

}

module.exports = {
    selectAllAlunoID,
    inserirAluno
    
}