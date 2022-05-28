var jogador1 =3;
var jogador2 =1;
var placar;
/*
//estrutura em if ternário
//leia-se: se jogador 1 for maior que -1 e jogador 2 for maior que -1, printar 'os jogadores são válidos', caso contrário, 'os jogadores são inválidos'
jogador1 > -1 && jogador2 >-1? console.log('os jogadores são válidos'):('os jogadores são inválidos');
    if (jogador1 > 0){
        console.log('Jogador 1 marcou ponto')
    } else if (jogador2 > 0){
        console.log('Jogador 2 marcou ponto')
    } else {
        console.log('ninguém marcou ponto')
    }



switch (placar) {
    case placar = jogador1 > jogador2 :
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1 :
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('ninguém marcou ponto')
} 
*/

let array = ['valor1','valor2','valor3','valor4']
let object= {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

//for:  vai executar uma instrução até que ela seja falsa
/*for (let indice = 0; indice < array.length; indice++){
    console.log (indice)
}*/

//for in: Funciona como uma repetição a partir de uma propriedade:
//com array
/*for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i)
}
*/
/*
for (i of array) {
    console.log(i);
}

for (i of object.propriedade2) {
    console.log(i)
}
*/

/*var a=0;
while (a<10) {
    a++;
    console.log(a)
}*/
var a =0
do {
a++;
console.log(a);
} while (a<10)