const name = 'Jack';
const greet = true;

function tagExample(strings, nameValue) {
   let str0 = strings[0]; // Hello
   let str1 = strings[1]; // , how are you?

   if(greet) {
      return `${str0}${nameValue}${str1}`;
   }
}

// criando literal marcado
// passando o argumento name
const result = tagExample`Hello ${name}, how are you?`;

console.log(result);