// programa que mostra o atraso na execução

function greet() {
   console.log('Hello world');
}

function sayName(name) {
   console.log('Hello' + ' ' + name);
}

// chamando a função
setTimeout(greet, 2000);
sayName('John');