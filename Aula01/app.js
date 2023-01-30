//Comemtario em linha
/**
 Cometario 
    em 
    Bloco
 */

 //Permite essa mensagem no terminal
console.log('testando o node.JS');
//importando da biblioteca que permite entrada de dados via teclado
var readline = require('readline')
//Criamos um objeto ou variavel que vai ser especialista na entrada 
// de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
//CallBack -  uma função de Callback permite que na própria linha de programação
//seja uma variavel, um processo, a chamado de metodo possa acontecer
//um retorno de dados automatico , sem precisar sair deste processamento 

//criar uma interação como o usuario, para entrada de dados.
//Após o usuario digitar o conteudo, o objeto entradaDados permite 
//Retornar o conteudo digitado para ser utilizado. Isso acontece através 
//de uma função de CallBack 
entradaDados.question('Favor digitar seu nome: \n',function(nome,idade){
    console.log('bem vindo,'+nome+ ' ao servidor note.js ! ');
});
