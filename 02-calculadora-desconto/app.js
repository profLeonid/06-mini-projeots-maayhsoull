'use script'

function trocarCor(desconto){
    const resultado = document.getElementById('resultado')

    removerClasses()
    console.log(desconto)
    if (desconto < 5 ){
        resultado.classList.add('desconto1')

    }else if (desconto <= 10){
        resultado.classList.add('desconto2')
    }else{
        resultado.classList.add('desconto3')
    }
 
}

const calcularDesconto = (preco, desconto) => preco * desconto / 100

function mostarResultado(){
    
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')
    //conteudo do resultado
    resultado.textContent = calcularDesconto(preco, desconto)

    trocarCor(desconto)
    
}

function removerClasses(){
    const resultado = document.getElementById('resultado')

    resultado.classList.remove('desconto1', 'desconto2', 'desconto3')
}
//fazer apenas se for usar o botão apenas uma vez para uma unica ação.
//da a ele o click
document.getElementById('calcular')
        .addEventListener('click', mostarResultado)





