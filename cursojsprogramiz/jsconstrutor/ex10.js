function Person () {
   this.name = 'John'
}

// adicionando propriedade
Person.prototype.name = 'Peter';
Person.prototype.age = 23;

const person1 = new Person();

console.log(person1.name);
console.log(person1.age);
console.log(Person.prototype);