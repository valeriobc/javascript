const string ='Find me';
const pattern = /me/;

// pesquisa se o padrão está na variável string
const result1 = string.search(pattern);
console.log(result1);

// substitui o caractere por outro caractere
const string1 = 'Find me';
const result = string1.replace(pattern, 'found you'); // Find found you
console.log(result);

// dividindo uma string em elementos de array
const regex1 = /[\s,]+/;
const result2 = 'Hello world! '.split(regex1);
console.log(result2); 

// pesquisa o número de telefone do padrão
const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
const result3 = regex2.exec('My phone number is: 555 123-4567.');
console.log(result3);