/*************************************************
 * Objetivo: Ultilizar codigos e metodos de array 
 * data: 24/02/2023
 * Autor: Gustavo
 * Versão:1.0
 *************************************************/

//[ ] - representa um objeto do tipo array
//{ } - representa um objeto do tipo JSON

const listaNomes = ['José', 'Maria', 'luiz', 'Antonio', 'Ana', 'Carlos', 20, true];
const listaProdutos = ['teclado', 'Mouse', 'Monitor', 'Gabinete', 'HDD', 'Memoria'];

const exibindoDados = function () {


    //verifica o tipo de dados do elemento listaNome
    console.log(typeof (listaNomes));

    //verifica o tipo de dados dos itens da array
    console.log(typeof (listaNomes[6]));
    //Exibe o conteúdo de um indece
    console.log(listaNomes[0])

    //exibe todos os item do array
    console.log(listaNomes)

    //Permite visualizar o conteudo da array em tabela
    console.table(listaNomes)


    console.log('O nome do aluno é:' + listaNomes[0])
    console.log(` O nome do aluno é:+ ${listaNomes[0]}`)

    //leangth - retorna a quantidade de itens de uma array
    console.log(listaNomes.length)

    //percorrendo um array com o while 
    console.log('Exemplo com while')
    let cont = 0; // start
    let qtdeItens = listaNomes.length //stop

    while (cont < qtdeItens) {
        console.log(` O nome do aluno é:  ${listaNomes[cont]}`)
        cont += 1
    }

    //Percorrendo um array com FOR
    console.log('Exemplo com For')

    for (let cont = 0; cont < qtdeItens.length; cont++) {
        console.log(` O nome do aluno é:  ${listaNomes[cont]}`)
    }

    //Percorrendo um array com FOREACH
    console.log('Exemplo com ForeAch')

    listaNomes.forEach(function (nome) {
        console.log(` O nome do aluno é: ${nome}`)
    });

    // uma forma mais tradicional de fazer o Foreach
    console.log('Exemplo com ForeAch')
    for (item in listaNomes)
        console.log(` O nome do aluno é: ${listaNomes[item]}`)
};


const manipulandoDados = function () {
    //push -  ADICIONA NOVOS ITENS NO FINAL DO ARRAY, PRESERVANDO OS ELEMETOS ANTERIORES
    listaProdutos.push('Memoria');
    listaProdutos.push('camera', 'fone')
    console.table(listaProdutos)

    //unshift - Adiciona novos itens no inicio do Array, re-organizando todos os elementos
    listaProdutos.unshift('HD', 'SSD', 'PLACA-MÃE')
    console.table(listaProdutos)

    //pop- Rmove o ultimo item do array, preservando os elemtentos ateriores
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift- remove o item do inicio do array, re-organizando todos os elementos
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice- Permite criar uma cópia ou uma replica de um array 
    const novosProdutos = listaProdutos.slice();
    console.log(novosProdutos)

    //indexOF-Permite buscar dentro de um arra um item
    //Se o item for -1 o item não foi encontrado
    // se o item for maior ou igual a 0, o item foi encontrado e ele retorna o indice 
    console.log(listaProdutos.indexOf('Mouse'));

    //exemplo de ultilização do indexOF
    if (listaProdutos.indexOf('PC') >= 0) {
        console.log('item encontrado')
    } else {
        console.log('item não encontrado')
    }
}


const removerProduto = function (nomeProduto) {

    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome);

    //splice - Permite apagar um ou mais itens de uma array através do indice
    //se for encaminhado somente o indece ele irá apagar todos os itens
    //Para baixo
    //Para limitar a quantidade de itens a ser apagado, devemos informar como segundo parametro
    if (indice >= 0) {
        listaProdutos.splice(indice, 1);
        status = true
    } else {
        status = false
    }
    return status;

}

const removerItens =  function(itensRemovidos){

    let itens = itensRemovidos
    let tamanho = listaProdutos.indexOf(itens)
    const novaArray = listaProdutos.slice()
    let status
    
    if (tamanho >= 0) {
        listaProdutos.splice(tamanho,1)
        status = true
    }else {
        console.log(status = false)
    }
    return novaArray

}
//manipulandoDados();
// console.table(listaProdutos)
// console.log(removerProduto('Mouse'))
// console.table(listaProdutos)

console.log(removerItens('PC'));
console.log(listaProdutos)


