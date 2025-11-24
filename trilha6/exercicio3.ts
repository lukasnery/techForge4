class EmailSenderInicial {
    sendEmail(contato: { email: string; mensagem: string }) {
        if (!contato.email.includes("@")) {
            throw new Error("Email inválido");
        }

        console.log(`Email enviado para ${contato.email}: ${contato.mensagem}`);
    }
}

class ContactValidator {
    validate(contact: { email: string; mensagem: string }) {
        return contact.email.includes("@");
    }
}

class EmailSender {
    constructor(private validator: ContactValidator) {}

    send(contact: { email: string; mensagem: string }) {
        if (!this.validator.validate(contact)) {
            throw new Error("Contato inválido!");
        }

        console.log(`Email enviado para ${contact.email}: ${contact.mensagem}`);
    }
}

const validator = new ContactValidator();
const sender = new EmailSender(validator);
sender.send({ email: "teste@email.com", mensagem: "Olá!" });
