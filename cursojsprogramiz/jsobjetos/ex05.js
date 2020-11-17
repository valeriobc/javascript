// objetos aninhados
const student = {
   name: 'John',
   age: 20,
   marks: {
      science: 70,
      math: 75
   }
};

// acessando a propriedade do objeto student
console.log(student.marks); // {science: 70, math: 75}

// acessando a propriedade do objeto marks
console.log(student.marks.science); // 70