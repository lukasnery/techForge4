class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  valorTotalEstoque(): number {
    return this.preco * this.quantidade;
  }
}

// Exemplo:
const produto = new Produto("Caderno", 10, 5);
console.log(produto.valorTotalEstoque()); // 50
