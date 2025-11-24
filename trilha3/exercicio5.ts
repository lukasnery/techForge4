abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}

    getSalario() {
        return this.salario;
    }

    getNome() {
        return this.nome;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]) {
    funcionarios.forEach(func => {
        const salarioFinal = func.getSalario() + func.calcularBonus();
        console.log(`${func.getNome()} — Salário final: ${salarioFinal}`);
    });
}

const funcionarios: Funcionario[] = [
    new Gerente("Carlos", 5000),
    new Operario("João", 2000)
];

calcularSalarioComBonus(funcionarios);
