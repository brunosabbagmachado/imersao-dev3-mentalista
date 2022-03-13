var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    var elementoResultado = document.getElementById("resultado");

    if(chute == numeroSecreto){
        elementoResultado.innerHTML = "Acertou! O número secreto é " + numeroSecreto + ". Parabéns!!!";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Por favor, digite um número de 0 a 10.";
    } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "Errou! O número secreto é maior que " + chute + ". Tente novamente.";
    } else {
        elementoResultado.innerHTML = "Errou! O número secreto é menor que " + chute + ". Tente novamente.";
    }
}

//desafio: colocar tentativas no jogo
//tres tentativas
//ao errar as 3 o jogo mostra qual era o número secreto e pede para o usuário recarregar