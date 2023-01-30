/*************************************
Objetivo: Calculadora 
Autor: Gustavo 
Data: 30/01/2023
Versão: 1.0
****************************************/

// Primeiro vou importando as biliotecas readline 
var readline = require ('readline')


//Segundo vou criar a entrada de dados 
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// criando a function para a entrada de dados 
entradaDeDados.question('Bem vindo, calculadora \n',function(calculadora){
    
    console.log
    entradaDeDados.question('digite uma operação: \n , 1-soma \n 2-subtrção 3-multiplicação 4-divisão\n',  function(operacao){
        let operacao
        let soma 
        let subtracao
        let multiplicacao
        let divisao
        
        
       if(operacao == 1){
           console.log('Você escolheu soma \n')
           soma = Number(n1) + Number(n2)
           console.log('o resultado é:' + soma + '\n')
    
    
       }
    
    
    
    
    
})





    
