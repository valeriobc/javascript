// função construtora
function Person () {
   this.name = 'John',
   this.age = 23

   this.greet = function () {
      console.log('hello');
   }
}

// criando um objeto
const person1 = new Person();
const person2 = new Person();

// acessando propriedades
console.log(person1.name); // John
console.log(person2.name); // John

