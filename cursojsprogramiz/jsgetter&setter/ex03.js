const student = {
   firstName: 'Monica'
}

// pegando a propriedade
Object.defineProperty(student, "getName", {
   get : function () {
      return this.firstName;
   }
});

// definindo a propriedade
Object.defineProperty(student, "changeName", {
   set : function (value) {
      this.firstName = value;
   }
});

console.log(student.firstName); // Monica

// alterando o valor da propriedade
student.changeName = 'Sarah';

console.log(student.firstName);
console.log(student.getName);

