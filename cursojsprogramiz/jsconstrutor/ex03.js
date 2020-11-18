// usando objeto literal
let person = {
   name: 'Sam'
}
console.log(person.name);

let student = person;

// mudando a propriedade do objeto
student.name = 'John';

// mudando a propriedade do objeto na origem
console.log(person.name); // John
