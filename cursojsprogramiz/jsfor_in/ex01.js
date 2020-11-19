const student = {
   name: 'Monica',
   class: 7,
   age: 12
};

// usando for...in
for (let key in student) {
   // mostre as propriedades
   console.log(`${key} => ${student[key]}`);
}