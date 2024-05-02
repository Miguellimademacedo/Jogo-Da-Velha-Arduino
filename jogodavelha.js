function main() {
    var velha;
    var haVencedor;

    haVencedor = false;

    // Criar o tabuleiro e jogadores, zerar as variáveis.
    // 
    // 0: Posição vazia
    // 1: jogada na Posição do jogador 1
    // 2: jogada na Posição do jogador 2
    var tabuleiro = Array(9);

    // Limpar/zerar o tabuleiro
    var index;

    for (index = 0; index <= 8; index++) {
        tabuleiro[index] = 0;
    }
    var jogador1;

    jogador1 = "jogador1";
    var jogador2;

    jogador2 = "jogador2";
    var jogada;

    // Iniciar o jogo, definir quem joga primeiro
    var jogadorDaVez;

    jogadorDaVez = 1;

    // Anotar/Registrar a jogada, do primeiro jogador
    velha = 1;
    do {
        console.log(tabuleiro[0].toString() + tabuleiro[1] + tabuleiro[2]);
        console.log(tabuleiro[3].toString() + tabuleiro[4] + tabuleiro[5]);
        console.log(tabuleiro[6].toString() + tabuleiro[7] + tabuleiro[8]);
        jogada = "";
        console.log("Digite a posição de sua peça JOGADOR" + jogadorDaVez);
        jogada = window.prompt('Enter a value for jogada');

        // Converter a jogada texto em dois inteiros linha e coluna
        // Simula a função Serial.parseint() do Arduino
        var linha;

        linha = parseInt(jogada.charAt(0));
        var coluna;

        coluna = parseInt(jogada.charAt(2));
        console.log("Linha: " + linha + "; Coluna: " + coluna);

        // Verificar se a posição "jogada" é válida
        if (tabuleiro[3 * linha + coluna] == 0) {
            tabuleiro[3 * linha + coluna] = jogadorDaVez;

            // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo.
            // Verificar a jogada vencedora nas linhas
            if (tabuleiro[0] == jogadorDaVez && tabuleiro[1] == jogadorDaVez && tabuleiro[2] == jogadorDaVez || tabuleiro[3] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[5] == jogadorDaVez || tabuleiro[6] == jogadorDaVez && tabuleiro[7] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
                haVencedor = true;
            } else {

                // Verificar a jogada vencedora nas colunas
                if (tabuleiro[0] == jogadorDaVez && tabuleiro[3] == jogadorDaVez && tabuleiro[6] == jogadorDaVez || tabuleiro[1] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[7] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[5] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
                    haVencedor = true;
                } else {

                    // Verificar a jogada vencedora nas diagonais
                    if (tabuleiro[0] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[8] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[6] == jogadorDaVez) {
                        haVencedor = true;
                    } else {
                        if (jogadorDaVez == 1) {
                            jogadorDaVez = 2;
                        } else {
                            jogadorDaVez = 1;
                        }
                    }
                }
            }
            velha = velha + 1;

            // Trocar jogador
        } else {
            console.log("Posição está inválida, jogue novamente!!!");

            // Informar ao jogador 1 que a posição está preechida, é inválida e ele precisa informar uma posição válida.
        }

        // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo
    } while (!haVencedor && velha <= 9);
    if (haVencedor) {
        console.log("Parabéns pela vitória, jogador" + jogadorDaVez);
    } else {
        console.log("DEU VELHA");
    }
    console.log(jogadorDaVez.toString() + "GANHOU!!! Jogadas: " + velha);

    // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo
}

function funçãoparatabuleiro() {
    
    return ;
}

function validaEntrada(entrada) {
    var retorno;

    retorno = false;
    if (entrada.length() == 3) {
        if (entrada.charAt(0) == "0" || entrada.charAt(0) == "1" || entrada.charAt(0) == "2") {
            if (entrada.charAt(2) == "0" || entrada.charAt(2) == "1" || entrada.charAt(2) == "2") {
                retorno = true;
            }
        }
    }
    
    return retorno;
}
