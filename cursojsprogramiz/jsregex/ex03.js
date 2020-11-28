const string = 'Hello hello hello';

// realizando uma substituição
const result1 = string.replace(/hello/, 'world');
console.log(result1); // Hello world hello

// realizando uma substituição global
const result2 = string.replace(/hello/g, 'world');
console.log(result2); // Hello world world

// realizando uma substituição case-insensitive
const result3 = string.replace(/hello/i, 'world');
console.log(result3); // world hello hello

// realizadno uma substituição case-insensite e global
const result4 = string.replace(/hello/gi, 'world');
console.log(result4); // world world world