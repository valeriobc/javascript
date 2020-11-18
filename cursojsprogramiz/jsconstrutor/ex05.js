// função construtora
function Person () {
   this.name = 'John',
   this.age = 23
}

// criando objetos
let person1 = new Person();
let person2 = new Person();

// adicionando nova propriedade à função construtora
Person.prototype.gender = 'Male';
Person.prototype.heigth = 1.82;

//console.log(person1.gender); // Male
//console.log(person2.gender); // Male

console.log(Person.prototype);