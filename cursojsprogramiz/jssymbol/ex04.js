let id = Symbol("id");

let person = {
   name: 'Jack',

   // adicionando símbolo como chave
   [id]: 123 // não "id": 123
};

console.log(person); // { name: 'Jack', [Symbol(id)]: 123 }