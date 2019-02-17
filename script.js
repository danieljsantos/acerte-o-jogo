/* 
O objetivo é criar um jogo de adivinhação de números.
1 - Gerar um número aleatório entre 0 e 50;
2 - Pedir para o usuário advinhar o número;
3 - Se o usuário acertar informar que ele ganhou;
4 - Se o  usuário errar, informar para ele que ele errou
e se o número dito é maior ou menor que o número aleatório;
5 - Se o usuário errar ele também perde uma vida;
6 - O usuário tem 10 vidas para ganhar o jogo;
*/

function aleatorio(min = 0,max = 0){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let vidas = 10;
let numero = aleatorio(0,50);
let acertou = false;
let palpite;

while((vidas > 0) && acertou == false){
    
    palpite = (prompt(vidas + " Chances\n" + "Informe o número: "));
  
    if (palpite == numero){
        acertou = true;
        alert("Parabéns, você acertou o número");
    }else if(palpite > numero){
        alert("O numero é menor que "+palpite);
        vidas--;
    }else{
        alert("O numero é maior que "+palpite);
        vidas--;
    }
}