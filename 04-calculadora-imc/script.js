'use strict'

const formulaImc = (peso, altura) => Number(peso) / (Number(altura) * Number(altura))

function coletarDados(){
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = formulaImc(peso, altura)

    return resultado
}

const gerarClassificacao = function (imc) {
    let imcUsuario = imc
    let name = document.getElementById('nome').value
    //classificacao é para receber a string que irá resultar a classificação do imc
    let classificacao

    const resultado = document.getElementById('resultado')
    removerClasses()

    if (imcUsuario < 18.5) {
        classificacao = 'Abaixo do peso'
        resultado.classList.add('abaixo_do_peso')

    } else if (imcUsuario >= 18.5 && imcUsuario <= 24.99) {
        classificacao = 'Peso normal'
        resultado.classList.add('peso_normal')

    } else if (imcUsuario >= 25 && imcUsuario <= 29.99) {
        classificacao = 'Acima do peso (sobrepeso)'
        resultado.classList.add('sobrepeso')

    } else if (imcUsuario >= 30 && imcUsuario <= 34.99) {
        classificacao = 'Obesidade grau I'
        resultado.classList.add('obesidade_grau_I')

    } else if (imcUsuario >= 35 && imcUsuario <= 39.99) {
        classificacao = 'Obesidade grau II'
        resultado.classList.add('obesidade_grau_II')

    } else if (imcUsuario > 40) {
        classificacao = 'Obesidade grau III'
        resultado.classList.add('obesidade_grau_III')
    }

    return resultado.textContent = (`${name} o seu imc é de: ${imcUsuario} e sua classificação é: ${classificacao}`)

}


function calcularIMC(){

    let imc = coletarDados().toFixed(2)
    gerarClassificacao(imc)
    
}

function removerClasses(){

    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixo_do_peso', 'peso_normal', 'sobrepeso', 'obesidade_grau_I', 'obesidade_grau_II', 'obesidade_grau_III')
}

