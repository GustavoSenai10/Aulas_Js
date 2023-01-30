/**************************************************
 * Objetivo : Calcular a média de 4 notas escolares 
 *  Autor: Gustavo 
 * Data:27/01/2023
 * Versão:1.0
 **************************************************/
//Importe da bibilioteca readiline
var readline = require('readline')

//Crie objeto para ser ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
/*
*Criação de variavel 

* var - Cria um espaço menor na memória de escopo global para o projeto,
seja essa variável podera ser utilizada em qualquer parte do arquivo (Varias funções)

* let - Cria um espaço menor na memória de escopo local para o projeto,
seja essa variável somente poderá ser utilizada em dentro da função que foi criada 

* const - Cria um espaço menor na memória de escopo local ou global para o projeto,
seja essa constante poderá ser utilizada em qualquer parte do projeto e nunca vai sofrerá
alteração

*/
// Função de CallBack para entrar o nome do aluno 
entradaDados.question('Digite seu nome: \n', function(nome){
    //Essa variável armazenar o valor que foi digitado pelo teclado     
    let nomeAluno = nome; 
    //Função de CallBack para entrar a nota1
    entradaDados.question('Digite a nota 1: \n', function(nota1){
        let valor1 = nota1;

        entradaDados.question('Digite a nota 2: \n',function(nota2){
            let valor2 = nota2;

            entradaDados.question('Digite a nota 3: \n',function(nota3){
                let valor3 = nota3;

                entradaDados.question('Digite a nota 4: \n', function(nota4){
                    let valor4 = nota4;
                    
                    let media;
                    /**
                     *  Converção de Tipos de dados
                     * 
                     * parseInt() ou number.parseInte() - Converte uma string em inteiro
                     * 
                     * persefloat() ou number.parseInte() - Converte em real
                     * 
                     * number() - number converte um string para número, conforme a entrada do valor
                     * o 35 define se será inteiro ou real 
                     * 
                     * operadoeres de comparação 
                     * 
                     * == (Verificar a igualdade entre coteudos)
                     * != (Verificar a diferençã entre conteudos)
                     * ===(verificação a igualdade entre conteudos e tipos de dados)
                     * ===! (verificação a diferença entre conteudo e igualdade de tipo de dadesverificação a diferença entre conteudo e igualdade de tipo de dades)
                     * !== (verificação a igualdade entre conteudo e diferença de tipo de dados)
                     *     Ex:
                     *        0 === 0 V
                     *        0 === '0' F
                     *       '0' === 0 F
                     *        0== 0 v
                     *        0 == '0' v
                     *        '0'== 0    
                     * < (menor)
                     * > (maior)
                     * <= (menor ou igual)
                     * >=  (maior ou igual)
                     * 
                     * Operadore Logicos
                     * E      && AND
                     * OU     || OR
                     * Negação ! NOT 
                     */
                     if (valor1==" " || valor2 == "" || valor3 == "" || valor4 == "") {
                         console.log("ERRRO: Você deixou de entrar algun valor")
                     }else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
                        //validação de entrada de texto
                        console.log('Você não digitou um numero valido.');

                    }
                    else if (valor1 <= 10 || valor2 <= 10 || valor3 <=10|| valor4 <=10) {

                        console.log('Por favor, coloque um número menor que 10')

                     }else if (valor1 < 0 || valor2 < 0 || valor3 < 0|| valor4 < 0) {

                        console.log('Por favor, coloque um número maior ou igual a 0')

                     }
                    else{
                        media = ( parseFloat(valor1) + parseFloat(valor2)  + parseFloat(valor3) + parseFloat(valor4))/4

                            console.log('a média do aluno é: ', + media.toFixed(1));
                        if (media > 7){

                            console.log('Status do Aluno: Aprovado 😔')
    
                        }else{
    
                            console.log('Status do Aluno: Reprovado 😃')
                        }
                    }

                    
                        
                     
                    
                });
            });
        });
    });
});