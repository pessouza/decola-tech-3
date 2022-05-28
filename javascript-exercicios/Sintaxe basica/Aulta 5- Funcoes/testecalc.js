//declarar função calculadora
function calculadora(){
    let operacao= Number(prompt('Escolha uma opção:\n 1-Soma (+)\n 2-Subtração (-)\n 3-Multiplicação(*)\n Divisão Real (/)\n 5-Divisão Inteira (%)\n 6-Potenciação (**)'))
//validação da operação
    if(!operacao || operacao >=7){
        alert('Opção inválida, tente novamente!');
        calculadora();
    } else {
//caso o número seja válido, continuar com o processo, definindo sempre no começo do bloco as variáveis
            let v1= Number(prompt('Digite aqui o primeiro número'));
            let v2= Number(prompt('Digite aqui o primeiro número'));
            let resultado;
//validação das variáveis
            if(!v1 || !v2){
                alert('Opção inválida, tente novamente!');
                calculadora();
            } else{
//definição das funções que serão usadas nos processos
                function soma(){
                    resultado=v1+v2;
                    alert(`${v1}+${v2}=${resultado}`);
                    novaOp();
                }
                function subt(){
                    resultado=v1-v2;
                    alert(`${v1}-${v2}=${resultado}`);
                    novaOp();
                }
                function mult(){
                    resultado=v1*v2;
                    alert(`${v1}*${v2}=${resultado}`);
                    novaOp();
                }
                function divReal(){
                    resultado=v1/v2;
                    alert(`${v1}/${v2}=${resultado}`);
                    novaOp();
                }
                function divInt(){
                    resultado=v1%v2;
                    alert(`O resto da divisão entre ${v1} e ${v2} é ${resultado}`);
                    novaOp();
                }
                function pot(){
                    resultado=v1**v2;
                    alert(`${v1} elevado a ${v2} é ${resultado}`);
                    novaOp();
                }
                function novaOp(){
                    let final =Number(prompt('Deseja fazer outra operação?\n1- Sim\n2- Não')) 
                    if (final == 1){
                        calculadora();
                    } else if (final == 2){
                        alert('Até mais!')
                    } else {
                        alert('Opção inválida, tente novamente!');
                        novaOp();
                    }              
                }
//o que vamos fazer com as funções que criamos acima?
                if (operacao== 1){
                    soma();
                } else if (operacao== 2) {
                    subt();
                } else if (operacao== 3){
                    mult();
                } else if (operacao== 4){
                    divReal();
                }else if (operacao== 5){
                    divInt();
                } else if (operacao== 6){
                    pot();
                }
            }           
    }

}
calculadora()