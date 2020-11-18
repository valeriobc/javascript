// mudança de protótipo
// função construtora
function Person () {
   this.name = 'John'
}

// adicionando uma propriedade
Person.prototype.age = 20;

// criando um objeto
const person1 = new Person();

console.log(person1.age); // 20

// alterando o valor da propriedade do protótipo
Person.prototype = { age: 50 };

// criando um novo objeto
const person3 = new Person();

console.log(person3.age);
console.log(person1.age);