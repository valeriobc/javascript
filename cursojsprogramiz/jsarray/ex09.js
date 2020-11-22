let arr = ['h', 'e'];
arr.name = 'John';

console.log(arr); // [ 'h', 'e', name: 'John' ]
console.log(arr.name); // 'John'
console.log(arr['name']); // 'John'