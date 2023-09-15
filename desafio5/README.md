# Desafio da aula 5
Foi criado duas funções, uma que calcula o IMC recebendo o peso e altura, e outra função que retorna a classificação de acordo com o imc recebido.

A classificação foi feita de acordo com a seguinte tabela:

| Intervalo de IMC | Classificação         |
|-------------------|-----------------------|
| Menos de 18.5     | Abaixo do peso        |
| 18.6 - 24.9       | Peso ideal (parabéns) |
| 25 - 29.9         | Levemente acima do peso|
| Mais de 30         | Obesidade       |

- Foram feitos 7 testes no total, verificando:
    - Se o calculo do imc está correto;
    - Retorno quando é passado uma altura igual a zero;
    - Se o retorno é igual a falso quando imc é igual a zero;
    - Se a classificação é 'abaixo do peso' quando o imc é menor que 18.5;
    - Se a classificação é 'peso ideal (parabéns)' quando o imc é entre 18.6 e 24.9;
    - Se a classificação é 'levemente acima do peso' quando o imc é entre 25 e 29.9;
    - Se a classificação é 'obesidade' quando o imc é maior que 30;

---
### Meu ambiente
Foi utilizado a IDE VSCode (OBS: Pode usar qualquer IDE).

Para a instalação do Nodejs: https://nodejs.org/en 

OBS: Foi utilizado a versão v18.16.0 do nodejs.

Também foram utilizado dois dependencias para os teste: mocha(v10.2.0) e chai(v4.3.8)


---
### Executando o código

Para executar os teste digite os seguintes comandos:

1. Para instalar as dependências:
```
npm install
```
2. Para executar os testes:
```
npm test
```
