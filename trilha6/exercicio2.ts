class UserManagerInicial {
    private users: string[] = [];

    createUser(nome: string) {
        this.users.push(nome);
        this.sendEmail(nome);
    }

    private sendEmail(usuario: string) {
        console.log(`Enviando email para ${usuario}...`);
    }

    listUsers() {
        return this.users;
    }
}

class EmailNotification {
    send(email: string) {
        console.log(`Email enviado para ${email}!`);
    }
}

class UserManager {
    private users: string[] = [];

    constructor(private emailService: EmailNotification) {}

    createUser(nome: string) {
        this.users.push(nome);
        this.emailService.send(nome);
    }

    listUsers() {
        return this.users;
    }
}

const emailService = new EmailNotification();
const um = new UserManager(emailService);
um.createUser("lucas@email.com");
console.log(um.listUsers());
