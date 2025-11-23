class Livro {
  titulo: string;
  autor: string;
  paginas: number;
  lido: boolean;

  constructor(titulo: string, autor: string, paginas: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = false;
  }

  marcarComoLido(): void {
    this.lido = true;
  }
}

// Exemplo:
const livro = new Livro("1984", "George Orwell", 350);
livro.marcarComoLido();
console.log(livro.lido); // true
