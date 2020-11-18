// função construtora
function Person () {
   this.name = 'John',
   this.age = 23
}

// criando objetos
let person1 = new Person();
let person2 = new Person();

// adicionando propriedades para o objeto person1
person1.gender = 'male';

// adicionando método para o objeto person1
person1.greet = function () {
   console.log('hello');
}

person1.greet(); // hello

// Error code
// person2 não tem o método greet()
person2.greet();