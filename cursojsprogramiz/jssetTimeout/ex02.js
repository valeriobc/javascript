// programa para mostrar um texto usando o método setTimeout
function greet() {
   console.log('Hello world');
}

let intervalId = setTimeout(greet, 3000);
console.log('Id: ' + intervalId);