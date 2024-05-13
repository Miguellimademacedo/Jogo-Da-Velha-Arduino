/*#include <iostream>
#include <sstream>
#include <String>
#include <cstdlib>
#include <cmath>

using namespace std;
*/

// Headers
String toString (double);
int toInt (String);
double toDouble (String);
bool validaPosicao(String entrada);

int main() {
    // Criar o tabuleiro e jogadores, zerar as variáveis.
    // 
    // 0: Posição vazia
    // 1: jogada na Posição do jogador 1
    // 2: jogada na Posição do jogador 2
    int velha;
    int linha;
    int coluna;
    bool haVencedor;

    haVencedor = false;
    int tabuleiro[9];

    // Limpar/zerar o tabuleiro
    int index;

    for (index = 0; index <= 8; index++) {
        tabuleiro[index] = 0;
    }
    String jogador1;

    jogador1 = "Jogador 1";
    String jogador2;

    jogador2 = "Jogador 2";
    String jogada;

    // Iniciar o jogo, definir quem joga primeiro
    int jogadorDaVez;

    jogadorDaVez = 1;

    // Anotar/Registrar a jogada, do primeiro jogador
    velha = 1;
    do {
    Serial.println(tabuleiro[0] || tabuleiro[1] || tabuleiro[2]);
    Serial.println (tabuleiro[3] || tabuleiro[4] || tabuleiro[5]);
    Serial.println (tabuleiro[6] || tabuleiro[7] || tabuleiro[8]);
        jogada = "";
        Serial.println ("Digite a posição da sua peça JOGADOR " + String(jogadorDaVez)) ;
        jogada = Serial.readString ();
        if (validaPosicao(jogada)) {

            // Converter a jogada texto em dois inteiros linha e coluna.
            // Simula a função Serial.parseInt() do Arduino
            linha = int(jogada[0]);

            // CORRIGIR O ERRO DE DIGITAÇÃO
            coluna = int(jogada[2]);
            Serial.println ("Linha: " || linha || "; Coluna: " || coluna);

            // Verificar se a posição 'jogada' é valida
            if (tabuleiro[3 * linha + coluna] == 0) {
                tabuleiro[3 * linha + coluna] = jogadorDaVez;
                if (tabuleiro[0] == jogadorDaVez && tabuleiro[1] == jogadorDaVez && tabuleiro[2] == jogadorDaVez || tabuleiro[3] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[5] == jogadorDaVez || tabuleiro[6] == jogadorDaVez && tabuleiro[7] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
                    haVencedor = true;
                } else {

                    // Verificar a jogada vencedora nas colunas.
                    if (tabuleiro[0] == jogadorDaVez && tabuleiro[3] == jogadorDaVez && tabuleiro[6] == jogadorDaVez || tabuleiro[1] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[7] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[5] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
                        haVencedor = true;
                    } else {

                        // Verificar a jogada vencedora nas diagonais.
                        if (tabuleiro[0] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[8] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[6] == jogadorDaVez) {
                            haVencedor = true;
                        } else {

                            // Trocar o jogador
                            if (jogadorDaVez == 1) {
                                jogadorDaVez = 2;
                            } else {
                                jogadorDaVez = 1;
                            }
                        }
                    }
                }
                velha = velha + 1;
            } else {
                Serial.println  ("Posição ocupada, jogue novamente !!!") ;

                // Informar ao Jogador 1 que a posição está preenchida, é inválida e ele precisa informar um posição válida.
            }
        } else {
            Serial.println ( "Jogada inválida !!!" );
        }

        // Verificar a jogada vencedora nas linhas.
    } while (!haVencedor && velha <= 9);

    // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo.
    if (haVencedor) {
        Serial.println ("Parabéns pela a vitória, jogador ") ;
    } else {
        Serial.println ("Deu VELHA!!!");
    }
    Serial.println(tabuleiro [0] ||  tabuleiro[1] ||  tabuleiro[2]);
    Serial.println (tabuleiro[3] || tabuleiro[4] || tabuleiro[5]);
    Serial.println (tabuleiro[6] || tabuleiro[7] || tabuleiro[8]);
    return 0;
}

bool validaPosicao(String entrada) {
    // Função para validar a entrada da jogada por meio de texto, o formato deve ser:
    // Primeiro caracter: 0 ou 1 ou 2
    // Segundo caracter: qualquer um
    // Terceiro caracter: 0 ou 1 ou 2
    bool entradaValida;

    entradaValida = false;

    // A entra da jogadanão pode ter mais que 3 caracteres de comprimento.
    if (entrada.length() == 3) {

        // Verifica o primeiro caracter se há somente caracteres válidos (0,1,2).
        if (entrada[0] == "0" || entrada[0] == "1" || entrada[0] == "2") {

            // Verifica o terceiro caracter se há somente caracteres válidos (0,1,2).
            if (entrada[2] == "0" || entrada[2] == "1" || entrada[2] == "2") {

                // Retorna verdadeiro se a entrada da jogada possui os caracteres e comprimentos válidos.
                entradaValida = true;
            }
        }
    }
    
    return entradaValida;
}

/*// The following implements type conversion functions.
String toString (double value) { //int also
    stringstream temp;
    temp << value;
    return temp.str();
}

int toInt (String text) {
    return atoi(text.c_str());
}

double toDouble (String text) {
    return atof(text.c_str());
}
*/
