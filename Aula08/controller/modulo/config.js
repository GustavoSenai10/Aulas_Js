/***************************************************************************************
 * OBJETIVO: Arquivo Responsavel por padronizar as menssagens de ERROS, SUCESSO, Funções e Variáveis para o projeto  
 * DATA: 28/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/

 //**************************************MESSAGENS DE ERRO ***************************************/
 const ERRO_REQUIRED_FIELD = {status: 400, message : 'Compos obrigatórios não foram preenchidos'}
 const ERRO_INVALID_ID ={status:400, message:'O ID informado está invalido'}
 const ERRO_INTERNAL_SERVER = {status : 500,  message : 'Devido a um erro interno no servidor, não foi prossivel' }   
 const ERRO_INVALID_CONTENT_TYPE = {status : 415,  message : 'O tipo de mídia no tipo de conteúdo da solicitação não é compativel  pelo servidor. Tipo aceito: Ex[application/json]' }   
 const ERRO_ID_INCORRET = {status : 400,  message : 'erro de ID' }   

//**************************************MESSAGENS DE SUCCESSO***************************************/
 
 const SUCCESS_CREATD_ITEM = {status: 201, message : 'Item criado com sucesso'}
 const SUCCESS_UPDATED_ITEM = {status: 200, message : 'Item item atualizado com sucesso'}
 

 module.exports = {
     ERRO_REQUIRED_FIELD,
     SUCCESS_CREATD_ITEM,
     ERRO_INTERNAL_SERVER,
     ERRO_INVALID_ID,
     SUCCESS_UPDATED_ITEM,
     ERRO_INVALID_CONTENT_TYPE,
     ERRO_ID_INCORRET
     
     
 }