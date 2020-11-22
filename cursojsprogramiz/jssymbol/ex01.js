// dois simbolos com a mesma descrição

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false