class Pagamento {
    processar() {
        console.log("Processando pagamento genérico...");
    }
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string) {
        super();
    }

    private validarCartao(): boolean {
        return this.numeroCartao.length === 16;
    }

    processar() {
        if (this.validarCartao()) {
            console.log(`Pagamento com cartão ${this.numeroCartao} aprovado.`);
        } else {
            console.log("Número de cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    processar() {
        const codigo = Math.floor(Math.random() * 1000000000000).toString();
        console.log(`Boleto gerado. Código: ${codigo}`);
    }
}

function processarPagamentos(pagamentos: Pagamento[]) {
    pagamentos.forEach(p => p.processar());
}

const listaPagamentos: Pagamento[] = [
    new PagamentoCartao("1234567890123456"),
    new PagamentoBoleto()
];

processarPagamentos(listaPagamentos);
