/*******************************************************
 * Objetivo: Arquivo de função para calculos matematicos
 * Data: 03/02/2023
 * Autor: Gustavo
 * Versão: 1.0
 * ****************************************************/
//Função para realizar calculos matematicos (Somar, Subtrair, multiplicar, dividir)
function calculadora(numero1, numero2, tipoCalculos) {
    let valor1 = Number (numero1)
    let valor2 = Number (numero2)
    let operacao = tipoCalculos.toUpperCase ()
    let resultado
    
    if (operacao == 'SOMA')
        resultado = (valor1) + (valor2)

    else if (operacao == 'SUBTRAIA')
        resultado = (valor1) - (valor2)

    else if (operacao == 'MUlTIPLICAÇÃO')
        resultado = (valor1) * (valor2)

    else if (operacao == 'DIVISÃO') {
        if (valor2 == 0)
            console.log('ERRO: NÃO É POSSIVEL REALIZAR A DIVISÃO COM O VALOR 0')
    } else {
        resultado = (valor1) / (valor2)
        //Validação para tratar a variável resultado não for processo por algun problema 
    } if (resultado == undefined) {
            return false;
    } else
        return resultado

}


//permite adicionar uma function no escopo global
//as function que não estiver aqui no export , serão tratadas aqui 
module.exports = {
    calculadora
}