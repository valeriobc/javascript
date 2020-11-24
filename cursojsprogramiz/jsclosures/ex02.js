function greet(name) {
   function displayName() {
      console.log('Hi' + ' ' + name);
   }

   // retornando uma função
   return displayName;

}

const g1 = greet('John');
console.log(g1); // retorna a definição da função
g1(); // chamando a função