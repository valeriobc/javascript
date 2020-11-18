// função construtora
function Person (person_name, person_age, person_gender) {

   // atribuindo valores como parâmetros para o objeto de chamada
   this.name = person_name,
   this.age = person_age,
   this.gender = person_gender,

   this.greet = function() {
      return ('Hi' + ' ' + this.name);
   }
}

// criando os objetos
const person1 = new Person('John', 23, 'male');
const person2 = new Person('Sam', 25, 'female');

// acessando propriedades
console.log(person1.name);
console.log(person2.name);