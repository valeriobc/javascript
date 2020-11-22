// pega o símbolo pelo nome
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

// pega o nome pelo símbolo
console.log( Symbol.keyFor(sym) ); // hello
console.log( Symbol.keyFor(sym1) ); // id