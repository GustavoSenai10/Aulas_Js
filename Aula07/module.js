var listaCidade = require('./estados_cidades.js')

let listaBrasil = listaCidade.estadosCidades.estados

//Siglas dos estados

const getListaDeEstados = function(){
    
    let status
    let estadosJson= {}
    let estadosArray = []

    listaCidade.estadosCidades.estados.forEach(function(siglas){
        estadosArray.push(siglas.sigla)
        estadosJson.UF = estadosArray
        estadosJson.quantidade = estadosArray.length
    })
    if (status) {
        status = estadosJson
        return status
    }else{
        status= false
        return status
    }
}

//Dados dos Estados

const getDadosEstado = function(uf){
    let ufEstado = uf.toUpperCasse()
    let estadosJson= {}

    listaCidade.estadosCidades.estados.forEach(function(DadosEstados){
        if (ufEstado == DadosEstados.sigla && ufEstado != undefined && ufEstado != null) {
            
            estadosJson.uf=DadosEstados.sigla
            estadosJson.dados=DadosEstados.nome
            estadosJson.capital=DadosEstados.capital
            estadosJson.regiao=DadosEstados.regiao
        }else{
            return false
        }
    })
}

//Capitais 
const getCapitalEstado = function(uf){
    let ufEstado=uf.toUpperCasse()
    let capitalJson= {}
    let status

    listaCidade.estadosCidades.estados.forEach(function(DadosEstados){
        if (ufEstado == DadosEstados.sigla && ufEstado != undefined && ufEstado != null) {


            capitaisJson.uf = DadosEstados.sigla
            capitaisJson.descricao = DadosEstados.nome
            capitaisJson.capital = DadosEstados.capital
        } 
    })

    if(status){
        status = capitalJson
        return status
    }else{
        status= false
        return status
    }
}

const getEstadosRegiao = function(regiao){
    let regiaoEstados = regiao.toUpperCasse()
    let estadosJson = {}
    let ufJson = {}
    let estadosArray = []
    let status

    listaCidade.estadosCidades.estados.forEach(function(dadosDaRegiao){
        if (regiaoEstados == dadosDaRegiao.regiao.toUpperCase()) {
            
            ufJson={
                uf: dadosDaRegiao.sigla,
                descricao: dadosDaRegiao.nome
            }

            estadosArray.push(ufJson)

            estadosJson={
                regiao: dadosDaRegiao.regiao,
                estados: estadosArray
            }
        }
    })

    if (estadosJson==undefined) {
        status = false
    }else{
        status = estadosJson
    }
    return status
}

//Capital 

const getCapitalPais = function(){

    let capitalJson = {}
    let capitalArray = []
    let listaJson = {}
    let status

    listaBrasil.forEach (function(capitalLista){

        if (capitalLista.capital_pais != undefined) {
            capitalJson = {
                capital_atual: capitalLista.capital_pais.capital,
                uf: capitalLista.sigla,
                descricao: capitalLista.nome,
                capital: capitalLista.capital,
                regiao: capitalLista.regiao,
                capital_pais_ano_inicio: capitalLista.capital_pais.ano_inicio,
                capital_pais_ano_termino: capitalLista.capital_pais.ano_fim
            }
            capitalArray.push(capitalJson)
            listaJson = {
                capitais: capitalArray
            }
        }
    })
    if (capitalArray==undefined) {
        status = false
    }else{
        status = listaJson
    }
    return status
}

//Cidades
const getCidades = function (sigla) {
    let siglaEstados = sigla.toUpperCase()
    let descricaoCidade = {}
    let listaCidades = []


    if (siglaEstados != undefined && siglaEstados != listaEstadosBrasil.sigla) {

        listaBrasil.forEach(function (estadosBrasil) {

            if (estadosBrasil.sigla == siglaEstados) {
                estadosBrasil.cidades.forEach(function (cidadesBrasil) {
                    listaCidades.push(cidadesBrasil.nome)
                })

                descricaoCidade = {
                    uf: estadosBrasil.sigla,
                    descricao: estadosBrasil.nome,
                    quantidade_cidades: estadosBrasil.cidades.length,
                    cidades: listaCidades
                }

            }
        })
        return descricaoCidade
    } else {
        
        return false
    }
    
}

getListaDeEstados()