/***************************************************************************************
 * OBJETIVO: API para integração entre back e banco de dados (GET , POST, PUT, DELETE)
 * DATA: 14/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/

    //import das bibliotecas
    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('bodyParser');
    const { request, response } = require('express');

    //criar o objeto app conforme a classe do express
    const app = express();

    //Permissões do cors 
    app.use((require,response,next)=>{
        
        //Define quem poderia acessar a API (* - todos)
        response.header('Acess-Control-Allow-Origin', '*')
        
        //Defini quais metodos serão utilizados na API
        response.header('Acess-Control-Allow-Methods', 'GET, POST,PUT DELETE , OPTIONS')

        //Atribui as permissões ao cors
        app.use(cors());

        next()
    })


//CRUD (Create, Read, Update e Delete)

/***************************************************************************************
 * OBJETIVO: API de controle de Alunos
 * DATA: 14/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/


    //EndPoint: retorna todos os dados  de alunos
    app.get('/v1/lion-school/aluno', cors(), async, function(request,response){

    })
    //EndPoint: retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/:id', cors(), async, function(request,response){

    })

    //EndPoint: insere um dado novo 
    app.post('/v1/lion-school/aluno', cors(), async, function(request,response){

    })

    //EndPoint: atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async, function(request,response){

    })

    //EndPoint: Exclui um aluno, filtrando pelo ID 
    app.delete('/v1/lion-school/aluno/:id', cors(), async, function(request,response){

    })

    app.listen(8080,function(){
        console.log('servidor aguardado requisições na porta 8080')
    })
