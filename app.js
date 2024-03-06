function gerarNumeroAleatorio(){
    return parseInt(Math.random()*10+1);
}

let numeroGerado = gerarNumeroAleatorio();

function conferirNumero() {
    let chute = document.querySelector('input').value;
    let resultado = document.querySelector('.container_resposta');

    if (chute == numeroGerado) {
        resultado.innerHTML = 'Parabéns, acertou!';
    } else {
        if (chute > numeroGerado) {
            resultado.innerHTML = 'O número é menor que ' + chute;
        } else {
            resultado.innerHTML = 'O número é maior que ' + chute;
        }
    }
}

function iniciarJogo() {

    numeroGerado = gerarNumeroAleatorio();
    document.querySelector('input').value = '';
    document.querySelector('.container_resposta').innerHTML = '';

    document.getElementById('reiniciar').disabled = true;
}

document.querySelector('input').addEventListener('input', 
function () {
    document.getElementById('reiniciar').disabled = false;
}
);
