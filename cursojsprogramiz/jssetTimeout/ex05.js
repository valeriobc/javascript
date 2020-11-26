// programa para mostrar o nome
function greet(name, lastName) {
   console.log('Hello' + ' ' + name + ' ' + lastName);
}

// passando argumento para setTimeout
setTimeout(greet, 1000, 'John', 'Doe');