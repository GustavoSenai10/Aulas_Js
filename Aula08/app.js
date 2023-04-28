/***************************************************************************************
 * OBJETIVO: API para integração entre back e banco de dados (GET , POST, PUT, DELETE)
 * DATA: 14/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/

//import das bibliotecas
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request, response } = require('express');

//criar o objeto app conforme a classe do express
const app = express();

//Permissões do cors 
app.use((require, response, next) => {

    //Define quem poderia acessar a API (* - todos)
    response.header('Acess-Control-Allow-Origin', '*')

    //Defini quais metodos serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST,PUT DELETE , OPTIONS')

    //Atribui as permissões ao cors
    app.use(cors());

    next()
})




/***************************************************************************************
 * OBJETIVO: API de controle de Alunos
 * DATA: 14/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/

//CRUD (Create, Read, Update e Delete)
/** 
 * Instalação do  prisma no projeto (biblioteca para conexão com Banco de dados) 
 * 
 * npm install prisma --save

    npx prisma para ver se foi instalado

    npx prisma init para iniciar ele 

    npm install @prisma/client --save

    npm prisma migrate dev ####Serve para realizar o sincronismo entre o prisma e o BD
 * 
 * 
*/
//Import do aquivo da controler que irá solicitar a modelo os daods do BD
 var controllerAluno = require('./controller/controller_aluno.js')

 const bodyParserJson = bodyParser.json

 //EndPoint: retorna todos os dados  de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {
    
    //Recebe os dados da controller de aluno
    let dadosAlunos =await controllerAluno.getAlunos()

    //Valida se existe dados de alunos 
    if(dadosAlunos){
        response.json(dadosAlunos)
        response.status(200)
    }else{
        response.json();
        response.status(404)
    }


})
//EndPoint: retorna o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
})

//EndPoint: insere um dado novo 
app.post('/v1/lion-school/aluno', cors(), bodyParserJson,  async  function (request, response) {
    
    
    //Recebe os dados emcaminhda nas requisição    
    let dadosBody = request.body
    
    let resultDadosAlunos = await controllerAluno.inserirAluno(dadosBody)

    response.status((await resultDadosAlunos).status)    
    response.json(resultDadosAlunos)
})

//EndPoint: atualiza um aluno existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

//EndPoint: Exclui um aluno, filtrando pelo ID 
app.delete('/v1/lion-school/aluno/:id', cors(), async  function (request, response) {

})

app.listen(8080, function () {
    console.log('servidor aguardado requisições na porta 8080')
})
