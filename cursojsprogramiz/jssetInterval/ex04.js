// programa para mostrar um nome
function greet(name, lastName) {
   console.log('Hello' + ' ' + name + ' ' + lastName);
}

// passando argumentos para setInterval
setInterval(greet, 1000, 'John', 'Doe');
