'use script'

const calcularMedia = (nota1, nota2, nota3) => ((Number(nota1) + Number(nota2) + Number(nota3)) / 3)

function coletarDados(){
    const nota1 = document.getElementById('nota1').value
    const nota2 = document.getElementById('nota2').value
    const nota3 = document.getElementById('nota3').value
    const resultado = calcularMedia(nota1, nota2, nota3)

    return resultado
  
}

function exibirResultado(){

    const media = coletarDados()
    const resultado = document.getElementById('resultado')

    removerClasses()
    if (media > 7) {
        resultado.classList.add('aprovado')
        return resultado.textContent = ('Aprovado média: ' + media)

    } else if (media >= 5 && media <= 6.9) {
        resultado.classList.add('recuperacao')
        return resultado.textContent = ('Recuperação média: ' + media)

    } else if (media < 5) {
        resultado.classList.add('reprovado')
        return resultado.textContent = ('Reprovado média: ' + media)
        
    }

}

function removerClasses(){

    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'reprovado', 'recuperacao')
}
