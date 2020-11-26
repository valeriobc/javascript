// exemplo de função callback
function greet(name, myFunction) {
   console.log('Hello world');

   // função callback
   // executada somente após greet() ser executada
   myFunction(name);
}

// função callback
function sayName(name) {
   console.log('Hello' + ' ' + name);
}

// chamando a função após 2 segundos
setTimeout(greet, 2000, 'John', sayName);