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

/**
 * JSON é composto: chave (atributo) e valor 
 * 
 *  chave  valor  chave        valor       chave      valor   
 * {nome: 'josé', celular : '11997777777', email: 'jose@gmail.com'}
 * 
 * 
 */

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
};


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

};

const removerItens = function (itensRemovidos) {

    let itens = itensRemovidos
    let tamanho = listaProdutos.indexOf(itens)
    const novaArray = listaProdutos.slice()
    let status

    if (tamanho >= 0) {
        listaProdutos.splice(tamanho, 1)
        status = true
    } else {
        return false
    }
    return novaArray

}

const listagemProdutos = function () {
    //Forma de n°1 de criar um JSON e já atribuir  chaves e valores 
    //let listagemProdutosJSON = {produtos: listaProtudos , clientes : listaNomes};

    //Fomra nº2 de cirar um JSON, ode as chaves e valores são atribuidos ao decorrer do projeto 
    // let listProdutosJson = {produtos: listaProdutos, clientes: listaNomes}

    //listProdutosJson.produtos = listaProdutos;
    //listProdutosJson.clientes = listaNomes;

    // console.log(listProdutosJson)
    // console.log(listProdutosJson.produtos[1]);
    // console.log(listProdutosJson.clientes[1])


    let listagemProdutosJSON = {}
    let listagemProdutosArray = [
        { nome: 'Monitor', quantidade: 300, marca: 'DELL', valor: 1000, codigo: 1 },
        { nome: 'Monitor', quantidade: 300, marca: 'LG', valor: 500, codigo: 2 },
        { nome: 'Teclado', quantidade: 100, marca: 'Logitech', valor: 700, codigo: 3 },
        { nome: 'Teclado', quantidade: 400, marca: 'radDragon', valor: 56, codigo: 4 },
        { nome: 'Teclado', quantidade: 1000, marca: 'Cavalo', valor: 200, codigo: 5 },
        { nome: 'Teclado', quantidade: 400, marca: 'G', valor: 120, codigo: 6 },
        { nome: 'Mouse', quantidade: 100, marca: 'Razer', valor: 800, codigo: 7 },

    ];


    // arrays para cores
    let listCoresDellArray = ['Preto', 'Branco', 'Cinza'];
    let listCoresLgArray = ['Preto', 'Cinza'];
    let listCoresTecladoArray = ['Preto', 'Cinza', 'Azul', 'Rosa', 'Cinza'];
    let listCoresMouseArray = ['Preto', 'Cinza', 'Azul', 'Rosa', 'Cinza', 'Verde', 'Vermelho', 'Amarelo', 'Roxo']

    //arrays para modelos
    let listModelosMonitor = ['LCD', 'lED', 'OLED', '4k', 'IPS']
    let listModelosTeclados = ['mecânico', 'semi-mecânico', 'Membrana', 'Ópticos']

    //Adiciona o  array de produtos dentro de um Json
    listagemProdutosJSON.produtos = listagemProdutosArray

    listagemProdutosJSON.produtos[0].cores = listCoresDellArray

    listagemProdutosJSON.produtos[1].cores = listCoresLgArray

    listagemProdutosJSON.produtos[2].cores = listCoresMouseArray

    listagemProdutosJSON.produtos[3].cores = listCoresTecladoArray

    listagemProdutosJSON.produtos[4].cores = listCoresTecladoArray

    listagemProdutosJSON.produtos[4].cores = listCoresTecladoArray

    listagemProdutosJSON.produtos[5].cores = listCoresMouseArray

    //adicionar modelos aos Monitores
    listagemProdutosJSON.produtos[0].modelos = listModelosMonitor
    listagemProdutosJSON.produtos[1].modelos = listModelosMonitor

    //adicionar modelos Teclados 
    listagemProdutosJSON.produtos[2].modelos = listModelosTeclados
    listagemProdutosJSON.produtos[3].modelos = listModelosTeclados
    listagemProdutosJSON.produtos[4].modelos = listModelosTeclados
    listagemProdutosJSON.produtos[5].modelos = listModelosTeclados

    //Adicionar corres ao Monitor  DELL

    // console.log('Nome: ' + listagemProdutosJSON.produtos[1].nome)
    // console.log('Marca: ' + listagemProdutosJSON.produtos[1].marca)
    // console.log('Valor: ' + listagemProdutosJSON.produtos[1].valor)
    // console.log('cor: ' + listagemProdutosJSON.produtos[1].cores[1])
    // console.log('Modelo: ' + listagemProdutosJSON.produtos[1].modelos[1])


    // ***********minha versão do exercicio*****************************

    // let cont = 0
    // let quantidade = listagemProdutosArray.length
    // while (cont < quantidade) {
    //     console.table(`Nome: ${listagemProdutosJSON.produtos[cont].nome}` )

    //     console.table(`Marca: ${listagemProdutosJSON.produtos[cont].marca}` )
    //     console.table(`Valor: ${listagemProdutosJSON.produtos[cont].valor}` )
    //     console.table(`Modelos: ${listagemProdutosJSON.produtos[cont].cores}` )
    //     console.log('**************************************************')
    //     cont +=1
    // }



    // **************************versão do professor*****************
    //percorre o array de produtos para listar os itens
    // listagemProdutosJSON.produtos.forEach(function (item) {
    //     console.log('nome:' + item.nome)
    //     console.log('nome:' + item.marca)

    //     if (item.cores != undefined) {
    //         //percorre o array de cores que ta dentro darray de produtos(item)
    //         item.cores.forEach(function (itemCor) {

    //             console.log('****Cores:' + itemCor);

    //         })

    //     }
    //     // Tratamento de erro
    //     if ((itemProdutos.modelos != undefined)) {
    //         itemProdutos.modelos.forEach(function (itemModelo) {
    //             console.log('****Modelos' + itemModelo)
    //         })

    //     }

    // })

    // listagemProdutosArray.forEach(function(tela) {
    //     console.log(`Nome : ${listagemProdutosJSON.produtos[0].nome}`)
    //     listagemProdutosArray.forEach(function(cores){
    //         console.log(`cor ${listagemProdutosJSON.produtos[1].cores[1]}`)
    //     })


    //  });



};

listagemProdutos();




//manipulandoDados();
// console.table(listaProdutos)
// console.table(listaProdutos)
//console.log(removerItens('PC'));
//console.log(listaProdutos)



