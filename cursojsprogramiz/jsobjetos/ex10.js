const person = {
   name:'John',
   age: 30,

   // acessando a propriedade name pelo uso de this.name
   greet: function() { console.log('The name is' + ' ' + this.name);}
};

person.greet();