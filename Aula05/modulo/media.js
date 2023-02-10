function media(numero1, numero2, numero3, numero4) {
    let nota1 = Number(numero1)
    let nota2 = Number(numero2)
    let nota3 = Number(numero3)
    let nota4 = Number(numero4)
    let resultado
    let status = true

    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10) {
        console.log('Coloque um numero menor que 10')
    }if (nota1 < 0 || nota2 < 0 || nota3< 0 || nota4 < 0) {
        console.log('Coloque um numero maior que 0')
    } else {
        resultado = Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)/4
    }
}
module.exports = {
    media
}