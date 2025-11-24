class Animal {
    private energia: number = 50;

    protected alterarEnergia(valor: number) {
        this.energia += valor;
    }

    comer() {
        this.alterarEnergia(10);
    }

    statusEnergia() {
        console.log(`Energia atual: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer() {
        console.log("O leão está caçando...");
        this.alterarEnergia(-20); // gasta energia caçando
        super.comer();            // recupera energia depois
    }
}

class Passaro extends Animal {
    comer() {
        console.log("O pássaro está bicando sementes...");
        this.alterarEnergia(5);
    }
}

const leao = new Leao();
const passaro = new Passaro();

leao.comer();
leao.statusEnergia();

passaro.comer();
passaro.statusEnergia();
