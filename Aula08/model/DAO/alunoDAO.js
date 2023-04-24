/***************************************************************************************
 * OBJETIVO: Responsavel pela manipulação de dados dos ALUNOS no banco de dados
 * DATA: 14/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/

//import da biblioteca do prisma client
var { PrismaClient, Prisma } = require('@prisma/client')

//Inserir o novo Aluno
const inserirAluno = function (dadosAluno) {

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




    //Instancia da classe PrismaClient 
    let prisma = new PrismaClient()

    //ScriptSQL para buscar todos os itens no DB
    let sql = 'select * from tbl_aluno'

    //$queryRawUnsafe() permite interpretar uma variável como sendo um ScriptMYSQL
    //$queryRaw('select * from tbl_aluno') - permite interpretar o script sql direto no metodo 
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retornou algum registro
    if (rsAluno.length > 0)
        return rsAluno
    else
        return false



}

//Retorna o aluno filtrado pelo ID  
const selectBYAlunoID = async function (id) {
    let prismaid = new PrismaClient()

    
    let sql = 'select * from tbl_aluno where id = ' + id

    let idAluno = await prismaid.$queryRawUnsafe(sql)

    if(idAluno.length > 0 )
        return idAluno
    else 
        return false
}

module.exports = {
    selectAllAlunoID,
    selectBYAlunoID
}