// Classe de abstração
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log(`${this.nome} está fazendo um som!`);
    }
}

// Classe herdeira de Animal
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        console.log(`${this.nome} está latindo!`);
    }
}

// Outra classe herdeira de Animal
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        console.log(`${this.nome} está miando!`);
    }
}

// Criando instâncias de objetos
const cachorro1 = new Cachorro('Rex', 5, 'Labrador');
const cachorro2 = new Cachorro('Bolt', 3, 'Bulldog');
const gato1 = new Gato('Mingau', 2, 'Branco');

// Chamando métodos
cachorro1.emitirSom();  // Output: Rex está latindo!
cachorro2.emitirSom();  // Output: Bolt está latindo!
gato1.emitirSom();      // Output: Mingau está miando!
