// função construtora
function Person () {
   this.name = 'John',
   this.age = 23
}

// criando objetos
const person1 = new Person();
const person2 = new Person();

// adicionando um método à função construtora
Person.prototype.greet = function() {
   console.log('hello' + ' ' + this.name);
}

person1.greet(); // hello John
person2.greet(); // hello John