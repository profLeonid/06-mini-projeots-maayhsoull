'use strict'

const formulaImc = (peso, altura) => Number(peso) / (Number(altura) * Number(altura))

const gerarClassificacao = function (peso, altura) {
    //criado 2 variáveis, imcUsuario é para calcular o imc
    //classificacao é para receber a string que irá resultar a classificação do imc
    let imcUsuario = calcularImc(peso, altura).toFixed(2)
    let classificacao

    if (imcUsuario < 18.5) {
        classificacao = "Abaixo do peso"
        return classificacao

    } else if (imcUsuario >= 18.5 && imcUsuario <= 24.9) {
        classificacao = "Peso normal"
        return classificacao

    } else if (imcUsuario >= 25 && imcUsuario <= 29.9) {
        classificacao = "Acima do peso (sobrepeso)"
        return classificacao

    } else if (imcUsuario >= 30 && imcUsuario <= 34.9) {
        classificacao = "Obesidade I"
        return classificacao

    } else if (imcUsuario >= 35 && imcUsuario <= 39.9) {
        classificacao = "Obesidade II"
        return classificacao

    } else if (imcUsuario > 40) {
        classificacao = "Obesidade III"
        return classificacao
    }

}

const tratativaDeDados = function (peso, altura) {
    let pesoUsuario = peso
    let alturaUsuario = altura

    //se os campos estiverem vazios ou não forem numeros irá retornar falso, caso contrário irá retornar verdadeiro.
    if (pesoUsuario == '' || isNaN(pesoUsuario) || alturaUsuario == '' || isNaN(alturaUsuario)) {
        console.log('ERRO: dados incorretos, insira novamente')
        return false
    } else {
        return true
    }
}

function calcularImc(){

}

