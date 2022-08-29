const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

const $elementoMenorValor = document.querySelector('#menor-valor')
const $elementoMaiorValor = document.querySelector('#maior-valor')


function gerarNumeroAleatorio(){
  return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

$elementoMaiorValor.innerHTML = maiorValor
$elementoMenorValor.innerHTML = menorValor
