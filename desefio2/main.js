const { Filme } = require('./filme.js');
const readline = require('readline');
// import { Filme } from './filme.js';

console.log("---------- MEUS FILMES ----------")


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function questionAsync(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

let flag = true
const filmes = [] //cria uma lista de filmes
async function escolherOpcao() {
  const opcao = await questionAsync("Escolha uma opção: ");
  console.log("---------------------------------")

  switch (opcao) {
    case "1":
        const titulo = await questionAsync("Título: ");
        const ano = await questionAsync("Ano: ");
        const genero = await questionAsync("Gênero: ");
        const duracao = await questionAsync("Duração: ");
        const assistido = await questionAsync("Assistido [sim ou não]: ");
        const avaliacao = await questionAsync("Avaiação [caso não tenha assistido: -]: ");
        const filme = new Filme(titulo, ano, genero, duracao, assistido, avaliacao);
        filmes.push(filme)
        console.log("-----------------------------")
        console.log("Filme adicionado!")
        break;
    case "2":
        const nome = await questionAsync("Nome do filme assistido: ")
        filmes.find(filme => {
            if(filme.titulo === nome){
                filme.foiAssistido();
            }
        });
        console.log("-----------------------------")
        console.log("Filme marcado com assistido!")
        break;
    case "3":
        const aux = await questionAsync("Nome do filme que gostaria de avaliar: ")
        let nota = await questionAsync("Sua avaliação: ")
        filmes.find(filme => {
            if(filme.titulo === aux){
                filme.avaliarFilme(nota);
            }
        });
        console.log("-----------------------------")
        console.log("Sua avaliação foi adicionada!")
        break;
    case "4":
        console.log("  -- Minha lista de filmes --  ")
        for (const f of filmes) {
            console.log("-----------------------------")
            f.exibirDetalhes();
        }
        break;
    case "5":
        console.log("Você saiu! Até logo!");
        
        return false
    default:
        console.log("Opção inválida.");
        break;
  }
  return true;
}

async function main() {
  while (flag) {
    console.log("1 - Adicionar um novo filme;");
    console.log("2 - Marcar um filme como assistido;");
    console.log("3 - Avaliar um filme;");
    console.log("4 - Exibir a lista de filmes;");
    console.log("5 - Sair;");

    flag = await escolherOpcao();
    console.log("---------------------------------")
  }
  rl.close()
}

main();
