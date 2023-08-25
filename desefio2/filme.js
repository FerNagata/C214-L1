class Filme{
    constructor(titulo, ano, genero, duracao, assistido, avaliacao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
        this.avaliacao = avaliacao;  
    }

    foiAssistido(){
        this.assistido = 'sim';
    }

    avaliarFilme(nota){
        this.avaliacao = nota;
    }

    exibirDetalhes(){
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`Duração: ${this.duracao}`);
        console.log(`Assistido: ${this.assistido}`);
        console.log(`Avaliação: ${this.avaliacao}`);
    }
}

module.exports = { Filme };