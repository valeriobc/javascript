// exemplo de aninhamento de função

// função externa
function greet(name) {

   // função interna
   function displayName() {
      console.log('Hi' + ' ' + name);
   }

   // chamando a função interna
   displayName();

}

// chamando a função externa
greet('John'); // Hi John