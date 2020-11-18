function Person () {
   this.name = 'John',
   this.age = 23
}

const person = new Person();

// checando o valor de protótipo
console.log(Person.prototype); //