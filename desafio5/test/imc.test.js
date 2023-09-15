const { expect } = require('chai'); // trabalha com valores de expectativa
const { calcularIMC, classificacaoIMC } = require('../src/imc.js');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    // Calcula o imc esperado
    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    // Envia para a função
    const IMCCalculado = calcularIMC(peso, altura);

    //compara os valores do imc esperado e calculado
    expect(IMCCalculado).to.equal(IMEsperado);
  });


  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });
  
  it('imc = 0, entrada inadequada', () => {
      const imc = 0
      
      const IMCCalculado = classificacaoIMC(imc);
      
      expect(IMCCalculado).to.be.false;
    });
    

    /**
     * Conferindo a classificação de acordo com o imc
     */
    it('imc com classificação: abaixo do peso', () => {
      const imc = 15.4;
  
      const IMCCalculado = classificacaoIMC(imc);
  
      expect(IMCCalculado).to.equal('abaixo do peso');
    });

    it('imc com classificação: peso ideal (parabéns)', () => {
      const imc = 20;
  
      const IMCCalculado = classificacaoIMC(imc);
  
      expect(IMCCalculado).to.equal('peso ideal (parabéns)');
    });
    
    it('imc com classificação: levemente acima do peso', () => {
      const imc = 25.4;
  
      const IMCCalculado = classificacaoIMC(imc);
  
      expect(IMCCalculado).to.equal('levemente acima do peso');
    });

    it('imc com classificação: obesidade', () => {
      const imc = 40.23;
  
      const IMCCalculado = classificacaoIMC(imc);
  
      expect(IMCCalculado).to.equal('obesidade');
    });

});