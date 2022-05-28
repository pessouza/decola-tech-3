//criar uma funçao chamada "calculadora". após ela, criar uma constante chamada de 'operação' que nos mostará um prompt com o seguinte texto:
function calculadora() {
    const operacao = Number(prompt('Escolha uma opção:\n 1-Soma (+)\n 2-Subtração (-)\n 3-Multiplicação(*)\n Divisão Real (/)\n 5-Divisão Inteira (%)\n 6-Potenciação (**) '));
    console.log(operacao);

//vamos checar a validade de nossa operação, se a pessoa escolheu de 1 a 6.
//o ! na frente do 'operacao' vai checar se ele não é um número, se ele não for um número, será inválido
if(!operacao || operacao>= 7){
    alert('Erro- operação inválida');
    calculadora()
} else{

//nós usamos o Number na frente do prompt para convertermos o resultado que botarmos aqui em número
//esses são os números e os resultados, que serão calculados e mostrados para a gente!
let n1 = Number(prompt ('Insira o primeiro valor:'));
let n2= Number(prompt ('Insira o segundo valor'));
let resultado;

if(!n1 || !n2){
    alert('Erro- parâmetros inválidos')
    calculadora()
} else{
//as funções dos cálculos da calculadora ficam aqui
function soma(){
    resultado = n1 + n2;
    alert(`${n1}+${n2}=${resultado}`);
    novaOperacao()
}

function sub(){
    resultado = n1 - n2;
    alert(`${n1}-${n2}=${resultado}`);
    novaOperacao()
}

function mult(){
    resultado = n1 * n2;
    alert(`${n1}*${n2}=${resultado}`);
    novaOperacao()
}

function divReal(){
    resultado = n1 / n2;
    alert(`${n1}/${n2}=${resultado}`);
    novaOperacao()
}

function divInt(){
    resultado = n1 % n2;
    alert(`o resto da divisão entre ${n1}e ${n2} é ${resultado}`);
    novaOperacao()
}

function pot(){
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
    novaOperacao()
}
// para evitar dar refresh para fazer outra conta, podemos criar uma função que resete a calculadora após acabar

function novaOperacao () {
    let opcao = prompt('Deseja fazer outra operação?\n 1- Sim\n 2-Não');
    
    if(opcao == 1){
        calculadora();
    }else if (opcao == 2){
        console.log('Até mais!')
    } else {
        alert('Digite uma opção válida!')
        novaOperacao();
    }
    }
}

// a partir do número que botarmos no prompt inicial, a calculadora irá iniciar uma função diferente, voltada para que operação queremos
if (operacao ==1){
    soma();
} else if (operacao ==2) {
    sub();
} else if (operacao ==3) {
    mult()
} else if (operacao ==4) {
    divReal()
} else if (operacao ==5) {
    divInt()
} else if (operacao ==6) {
    pot()
}
}
}


calculadora()