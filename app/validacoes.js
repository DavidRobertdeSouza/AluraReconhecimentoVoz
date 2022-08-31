const $dica = document.querySelector('#dica')

function verificarValorFalado(chute){
  const numero = +chute

  if(Number.isNaN(numero)){
    console.log('sss')
    $dica.innerHTML = 'Valor inválido'
    return false
  }

  if(numero > maiorValor || numero < menorValor){
    $dica.innerHTML = 'Valor fora do intervalo'
    return false
  }

  if(numero < numeroSecreto){
    $dica.innerHTML = 'O número secreto é maior <i class="fa-solid fa-up-long"></i>'
    return false
  } else if(numero > numeroSecreto){
    $dica.innerHTML = 'O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>'
    return false
  }else{
    $dica.innerHTML = `
    Você acertou!! <i class="fa-regular fa-circle-check"></i> 
    <br> O número secreto é ${numeroSecreto} <br>
    <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>
    `

    const $jogarNovamente = document.querySelector('#jogar-novamente')

    $jogarNovamente.onclick = () => {
      window.location.reload()
    }
    
    return true
  }


}