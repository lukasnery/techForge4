class Temperatura {
  valor: number; // Celsius

  constructor(valor: number) {
    this.valor = valor;
  }

  paraFahrenheit(): number {
    return this.valor * 1.8 + 32;
  }

  paraKelvin(): number {
    return this.valor + 273.15;
  }
}

// Exemplo:
const temp = new Temperatura(25);
console.log(temp.paraFahrenheit()); // 77
console.log(temp.paraKelvin());     // 298.15
