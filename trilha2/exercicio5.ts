class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionar(compromisso: string): void {
    this.compromissos.push(compromisso);
  }

  listar(): string[] {
    return this.compromissos;
  }
}

// Exemplo:
const agenda = new Agenda();
agenda.adicionar("Reunião às 10h");
agenda.adicionar("Dentista às 15h");
console.log(agenda.listar());
