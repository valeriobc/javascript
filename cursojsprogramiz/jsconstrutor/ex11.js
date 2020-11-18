function Person () {
   this.name = 'John'
}

// adicionando um protótipo
Person.prototype.age = 24;

// criando um objeto
const person = new Person();

// acessando propriedade do protótipo
console.log(person.__proto__);
console.log(Person.prototype);
console.log(Person.prototype.age);