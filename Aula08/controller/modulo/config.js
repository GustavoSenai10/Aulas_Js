/***************************************************************************************
 * OBJETIVO: Arquivo Responsavel por padronizar as menssagens de ERROS, SUCESSO, Funções e Variáveis para o projeto  
 * DATA: 28/04/2023
 * AUTOR: Gustavo Souza
 * Versão:1.0
 **************************************************************************************/

 //**************************************MESSAGENS DE ERRO ***************************************/
 const ERRO_REQUIRED_FIELD = {status: 400, message : 'Compos obrigatórios não foram preenchidos'}
 const ERRO_INTERNAL_SERVER = {status : 500,  message : 'Devido a um erro interno no servidor, não foi prossivel' }   

//**************************************MESSAGENS DE SUCCESSO***************************************/
 
 const SUCCESS_CREATD_ITEM = {status: 201, message : 'Item criado com sucesso'}
 

 module.exports = {
     ERRO_REQUIRED_FIELD,
     SUCCESS_CREATD_ITEM,
     ERRO_INTERNAL_SERVER
     
 }