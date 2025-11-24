interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: Livro[] = [];

    constructor(livros: Livro[]) {
        this.livros = livros;
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter((l) => l.disponivel);
    }
}
