let listaDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;

function exibirTextoNaTela( tag, texto)  {
let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese female', {rate:1.2});
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p',  'escolha um número de 1 e 10');
}

exibirMensagemInicial();

function verificarchute() {
    let chute = document.querySelector('input').value;
        
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto)  {
       exibirTextoNaTela('p', 'o numero secreto é menor');     
        } else {
            exibirTextoNaTela('p', 'o numero secreto é maior');    
        }
        tentativas++;
        limpacampo();
    }
}

function gerarNumeroaleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numerolimite  + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numerolimite)  {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido))  {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;  
    }
}

function limpacampo() {
    chute = document.querySelector('input');
chute.value = '';
}

  function reniciarjogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial();  
   document.getElementById('reiniciar').setAttribute('disabled',true ) 
}