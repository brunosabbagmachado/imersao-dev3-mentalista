var numeroSecreto = parseInt(Math.random() * 11);
console.log(`O número secreto é ${numeroSecreto}.`);

var tentativas = 1;
var totalDeTentativas = 3;

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    console.log(`Seu chute foi: ${chute}.`);

    var elementoResultado = document.getElementById("resultado");

    if(chute == numeroSecreto){
        elementoResultado.innerHTML = `Parabéns, você acertou! O número secreto é ${numeroSecreto}`;
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = `Por favor, digite um número de 0 a 10.`;
    } else if (tentativas >= totalDeTentativas) {
        elementoResultado.innerHTML = `Fim de jogo! Seu número de tentativas acabou. O número secreto era ${numeroSecreto}. Tente novamente.`;
    }  else {
        if (chute < numeroSecreto) {
            elementoResultado.innerHTML = "Errou! O número secreto é maior que " + chute + ". Tente novamente.";
            tentativas++;
            console.log(`tentativas: ${tentativas}`);
        } else {
            elementoResultado.innerHTML = "Errou! O número secreto é menor que " + chute + ". Tente novamente.";
            tentativas++;
        }
    }
}

//desafio: colocar tentativas no jogo
//tres tentativas
//ao errar as 3 o jogo mostra qual era o número secreto e pede para o usuário recarregar