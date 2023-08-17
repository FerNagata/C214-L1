// 1. Crie uma classe Filme com as seguintes propriedades: titulo, ano, genero, duracao, assistido (indica se o filme foi assistido) e avaliacao (deixa uma nota de avaliação).

// 2. Implemente métodos para:
// a) Exibir detalhes do filme (utilizando atributos);
// b) Marcar o filme como assistido;
// c) Avaliar o filme;

// 3. Crie objetos para representar três filmes diferentes .

class Filme{
    constructor(titulo, ano, genero, duracao, assistido, avaliacao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
        this.avaliacao = avaliacao;  
    }

    exibirDetalhes(){
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`Duração: ${this.duracao}`);
        console.log(`Assistido: ${this.assistido}`);
        console.log(`Avaliação: ${this.avaliacao}`);
    }

    foiAssistido(){
        this.assistido = 'Sim';
    }

    avaliarFilme(nota){
        this.avaliacao = nota;
    }
}

    const filme1 = new Filme('Harry Potter e a Pedra Filosofal', '2001', 'Aventura', '2h32m', 'Sim', '10')
    const filme2 = new Filme('O Poderoso Chefão', '1972', 'Ficção Policial', '2h55m', 'Não', '---')
    const filme3 = new Filme('Barbie', '2023', 'Comédia', '1h54', 'Sim', '8.5')

    filme1.exibirDetalhes();
    console.log('---------------------')
    filme2.foiAssistido();
    filme2.avaliarFilme('9');
    filme2.exibirDetalhes();
