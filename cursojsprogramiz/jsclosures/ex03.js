// Exemplo de JavaScript Closure

// função externa
function greet() {

   // variável definida no lado de fora da função interna
   let name = 'John';

   // função interna
   function displayName() {

      // acessando a variável name
      return 'Hi' + ' ' + name;

   }

   return displayName;

}

const g1 = greet();
console.log(g1); // retorna a definição da função
console.log(g1()); // retorna o valor