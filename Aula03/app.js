/*************************************
Objetivo:criar uma Calculadora 
Autor: Gustavo
Data: 30/01/2023
Versão: 1.1
****************************************/

// Primeiro vou importando as biliotecas readline 
var readline = require('readline')
//import da biblioteca da calculadora 
var matematica = require ('./modulo/calculadora.js')

//Segundo vou criar objeto para manipulação de dados 
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Valor 1
entradaDeDados.question('valor: \n', function (numero1) {
    let valor1 = numero1.replace(',', '.')
    //Valor 2
    entradaDeDados.question('valor2: \n', function (numero2) {

        let valor2 = numero2.replace(',', '.')
        //tipo de operação
        entradaDeDados.question('digite uma operação: \n 1-soma \n 2-subtrção\n 3-multiplicação\n 4-divisão\n', function (tipocalc) {
            let operacao = tipocalc.toUpperCase()

            let resultado
            //Validação e entrada de dados vazios  
            if (valor1 == ' ' || valor2 == '' || operacao == ' ') {
                console.log('EROO: Não é possivel calcular se algum dado estiver vazio')
                //Operação para entrada de dados numericos 
            } else if (isNaN(valor1) || isNaN(valor2))

                console.log('ERRO: não é possivel calcular se os dados digitados não forem números.')
            else {
                resultado = matematica.calculadora(valor1,valor2,operacao)
                if (resultado != false)
                console.log(resultado)
                else 
                entradaDeDados.close()
    
            }               



            })
    })
})













