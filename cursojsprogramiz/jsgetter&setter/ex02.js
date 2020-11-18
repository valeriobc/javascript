const student = {
   firstName: 'Monica',

   // propriedade(setter) acessora
   set changeName(newName) {
      this.firstName = newName;
   }
};

console.log(student.firstName); // Monica

// alterando(set) a propriedade do objeto usando setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah