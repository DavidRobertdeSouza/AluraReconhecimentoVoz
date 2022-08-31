const $elementoFalado = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.onresult = (e) => {
  let chute = e.results[0][0].transcript
  exibirNumeroFalado(chute)
  verificarValorFalado(chute)
}

function exibirNumeroFalado(chute){
  $elementoFalado.innerHTML = `
  <div>Você disse:</div>
    <span class='box'>${chute}</span>
  `
}

recognition.onend = () => recognition.start()



// recognition.addEventListener('result', onSpeak)

// function onSpeak(e){
//   console.log(e)
// }