// função construtora
function Person () {
   this.name = 'John',
   this.age = 23
}

// criando objetos
const person1 = new Person();
const person2 = new Person();

// adicionando propriedade à função construtora
Person.prototype.gender = 'male';

// valor do protótipo de Person
console.log(Person.prototype);

// herdando a propriedade do protótipo
console.log(person1.gender);
console.log(person2.gender);