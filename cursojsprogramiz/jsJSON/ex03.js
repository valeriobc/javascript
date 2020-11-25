// objeto JSON 
const jsonData = '{ "name": "John", "age": 22 }';

// convertendo para objeto JavaScript
const obj = JSON.parse(jsonData);

// acessando os dados
console.log(obj.name); // John