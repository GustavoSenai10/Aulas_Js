/***************************************************************************************
 * OBJETIVO: Responsavel pela Regra de negocio referente ao CRUD de alunos 
 * DATA: 14/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/

 //importe do arquivo DAO para acessar dados do aluno no BD 
 var alunosDAO = require('../model/DAO/alunoDAO.js')

//importe de configuração das variáves , funções, constantes e funções gerais  
var messege = require('./modulo/config.js');
const { SUCCESS_UPDATED_ITEM } = require('./modulo/config.js');


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
        let resultDadosAlunos = await alunosDAO.inserirAluno(dadosAluno);

        //Valida se o Banco de dados inseriu corretaemnte od dados
        if (resultDadosAlunos) {

            //Essa função que vai encotrar o ID 
            let novoAluno = await alunosDAO.selectLastID();
            let dadosAlunoJson ={};

            dadosAlunoJson.status = messege.SUCCESS_CREATD_ITEM.status;
            dadosAlunoJson.aluno = novoAluno;
            
            return dadosAlunoJson
        }else{
            return messege.ERRO_INTERNAL_SERVER
    
        }    
    }

}

//Atualizar um Aluno existente 
const atualizarAluno = async function (dadosAluno, idAluno) {
    
    // Validação para tratar campos obrigatorios e quantidade de caracteres 
    if( dadosAluno.nome == ""             || dadosAluno.nome == undefined            || dadosAluno.nome.length > 100           ||
        dadosAluno.rg == ""               || dadosAluno.rg == undefined              || dadosAluno.rg.length > 15              || 
        dadosAluno.cpf == ""              || dadosAluno.cpf == undefined             || dadosAluno.cpf.length > 18             || 
        dadosAluno.data_nascimento == ""  || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 || 
        dadosAluno.email == ""            || dadosAluno.email == undefined           || dadosAluno.email.length > 100          
    )
    {
        return messege.ERRO_REQUIRED_FIELD //Status code 400
        //Validação de ID
    }else if(idAluno == "" || idAluno == undefined || isNaN(idAluno) ){

            return messege.ERRO_INVALID_ID;
    }else{
        //adiciona o ID do aluno no JSON dos dados
        dadosAluno.id = idAluno

        let statusId = await alunosDAO.selectBYAlunoID(idAluno)
        
        if (statusId) {
            
            let resultDadosAlunos = await alunosDAO.updataAluno(dadosAluno)
        
            if (resultDadosAlunos) {
            
                let dadosAlunosJson  = {}

                dadosAlunosJson.status= messege.SUCCESS_UPDATED_ITEM.status;

                dadosAlunosJson.alunos = dadosAluno

                return dadosAlunosJson
            }else{
                return messege.ERRO_INTERNAL_SERVER; //500
            } 
        }else{
                
            return messege.ERRO_NOT_FOUND;
        }
        
    }
}

//Excluir um aluno existente
const deletarAluno =  async function (id) {

    let dadosAluno = await alunosDAO.deletarAluno()
    let alunoId = id
    
    if (alunoId == "" || alunoId == undefined || alunoId == isNaN) {
        
        return messege.ERRO_INVALID_ID;
    }else{
        //adiciona o ID do aluno no JSON dos dados
        dadosAluno.alunoId = alunoId

        let statusId = await alunosDAO.selectBYAlunoID(alunoId)
        
        if (statusId) {
            
            let resultDadosAlunos = await alunosDAO.updataAluno(dadosAluno)
        
            if (resultDadosAlunos) {
            
                let dadosAlunosJson  = {}

                dadosAlunosJson.status= messege.SUCCESS_UPDATED_ITEM.status;

                dadosAlunosJson.alunos = dadosAluno

                return dadosAlunosJson
            }else{
                return messege.ERRO_INTERNAL_SERVER; //500
            } 
        }else{
                
            return messege.ERRO_NOT_FOUND;
        }
        
    }
}

//Retorna a lista de todos os alunos 
const getAlunos = async function () {

    let dadosAlunosJson = {}

    //Chama a função do arquivo DAO que irá retronar todos os registros do BD 
    let dadosAluno = await alunosDAO.selectAllAlunoID()

    if (dadosAluno) {
        //Criando o Json com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJson.status = messege.SUCCESS_REQUEST.status;
        dadosAlunosJson.quantidade = dadosAluno.length
        dadosAlunosJson.alunos = dadosAluno
        return dadosAlunosJson
    } else {
        return messege.ERRO_NOT_FOUND
    }

}

//Retorna Filtrando Pelo ID 
const getBuscarAlunoID = async function (id) {
    
    if(id == "" || id == undefined || isNaN(id)){

        return messege.ERRO_ID_INCORRET
    }else{
        
        let dadosAlunosJson = {}

        //Chama a função do arquivo DAO que irá retronar todos os registros do BD 
        let dadosAluno = await alunosDAO.selectBYAlunoID(id)

        if (dadosAluno) {
            //Criando o Json com o atributo alunos, para encaminhar um array de alunos
            dadosAlunosJson.status = messege.SUCCESS_REQUEST.status;
            dadosAlunosJson.quantidade = dadosAluno.length
            dadosAlunosJson.alunos = dadosAluno
            return dadosAlunosJson
        } else {
        return messege.ERRO_NOT_FOUND
    }
}
}
module.exports = {
    getAlunos,
    inserirAluno,
    atualizarAluno,
    deletarAluno,
    getBuscarAlunoID
}