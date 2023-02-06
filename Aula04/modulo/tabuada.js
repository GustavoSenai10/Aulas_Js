/********************************************************
 * Objetivo: Arquivo da funções para calcular uma tabuada
 * Data:06/02/2023
 * Autor:Gustavo
 * Versão: 1.0
 *********************************************************/
//Função que gera uma tabuada até o comtador expecifico 
const getTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', "."))
    let tabuadaContador = Number(String(maxMultiplicador).replace(",", "."))
    let status = true
    let resultado
    let contador = 0 //start da repetição

    if (tabuada == " " || tabuadaContador == " ")
        status = false
    else if (isNaN(tabuada) || isNaN(tabuadaContador))

        status = false
    else {

        // while (contador <= tabuadaContador) {
        //     //2X0=0
        //     resultado = tabuada * contador;
        //     console.log(tabuada + "X" + contador + "=" + resultado)

        //     //contador = contador +1
        //     //contador++
        //     contador +=1 
        // }
        for (let contador = 0; contador <= tabuadaContador; contador++) {
             resultado = tabuada * contador;
             console.log(`${tabuada} + ${contador} = ${resultado}`)
            
        }

    }
        return status
}
getTabuada(10,20)
module.exports = {
    getTabuada
}