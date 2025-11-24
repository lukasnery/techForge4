class OrderInicial {
    private items: { nome: string; preco: number }[] = [];
    private totalPrice: number = 0;
    private paymentStatus: string = "Pendente";
    private shippingStatus: string = "Aguardando envio";

    addItem(item: { nome: string; preco: number }) {
        this.items.push(item);
        this.totalPrice += item.preco;
    }

    processPayment() {
        this.paymentStatus = "Pago";
        console.log("Pagamento processado");
    }

    updateShipping(status: string) {
        this.shippingStatus = status;
    }

    getDetails() {
        return {
            items: this.items,
            totalPrice: this.totalPrice,
            paymentStatus: this.paymentStatus,
            shippingStatus: this.shippingStatus,
        };
    }
}


class Cart {
    private items: { nome: string; preco: number }[] = [];

    addItem(item: { nome: string; preco: number }) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    getTotal() {
        return this.items.reduce((acc, item) => acc + item.preco, 0);
    }
}

class Payment {
    private status: string = "Pendente";

    process() {
        this.status = "Pago";
    }

    getStatus() {
        return this.status;
    }
}

class Shipping {
    private status: string = "Aguardando envio";

    updateStatus(status: string) {
        this.status = status;
    }

    getStatus() {
        return this.status;
    }
}

class Order {
    constructor(
        private cart: Cart,
        private payment: Payment,
        private shipping: Shipping
    ) {}

    getSummary() {
        return {
            items: this.cart.getItems(),
            total: this.cart.getTotal(),
            pagamento: this.payment.getStatus(),
            envio: this.shipping.getStatus(),
        };
    }
}

const cart = new Cart();
cart.addItem({ nome: "Mouse", preco: 90 });
cart.addItem({ nome: "Teclado", preco: 150 });

const payment = new Payment();
payment.process();

const shipping = new Shipping();
shipping.updateStatus("Enviado");

const order = new Order(cart, payment, shipping);
console.log(order.getSummary());
