let person = {
   name: "Jack"
};

// usando string como chave
person.id = 12;
console.log(person.id); // 12

// outro programa sobreescreve o valor
person.id = 'Another value';
console.log(person.id); // Another value
