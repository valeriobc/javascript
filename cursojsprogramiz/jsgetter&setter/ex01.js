const student = {
   // propriedade de dados
   firstName: 'Monica',

   // propriedade(getter) acessora
   get getName() {
      return this.firstName;
   }
};

// acessando propriedade de dados
console.log(student.firstName); // Monica

// acessando método getter
console.log(student.getName); // Monica

// tentando acessar como um método
console.log(student.getName()); // error