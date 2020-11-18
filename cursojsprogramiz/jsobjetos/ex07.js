// acessando método e propriedade
const person = {
   name: 'John',
   greet: function() { 
      console.log('hello'); 
   }
};

// acessando propriedade
console.log(person.name); // John

// acessando método
person.greet(); // hello

console.log(person.greet); // f () { console.log('hello'); }