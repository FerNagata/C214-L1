function calcularIMC(peso, altura){
    if (altura === 0){
        return 'NaN'; //Retorna caso a altura seja 0, não preenchida
    }

    const alturaMetros = altura/100;
    return(peso / (alturaMetros*alturaMetros)).toFixed(2);
}

function classificacaoIMC(imc){

    if(imc === 0){
        return false;
    }else{
        if (imc <= 18.5) {
            classificacao = 'abaixo do peso';
        } else if (imc >= 18.6 && imc <= 24.9) {
            classificacao = 'peso ideal (parabéns)';
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'levemente acima do peso';
        } else if (imc >= 30) {
            classificacao = 'obesidade';
        }
    }

    return classificacao;
}
module.exports = {calcularIMC, classificacaoIMC}; //Módulo responsável pela exportação da função para a coleta no teste