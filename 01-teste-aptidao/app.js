'use script'

function mudarCor(){
    const tempo = document.getElementById('tempo')
    const resultado = document.getElementById('resultado')

    removerClasses()
    if(tempo.value < 14.0){
        resultado.textContent = 'Apto'
        resultado.classList.add('apto')
    }else{
        resultado.textContent = 'Não Apto'
        resultado.classList.add('nao-apto')
    }
}

function removerClasses(){
    const resuldado = document.getElementById('resultado')

    resuldado.classList.remove('apto', 'nao-apto')
}