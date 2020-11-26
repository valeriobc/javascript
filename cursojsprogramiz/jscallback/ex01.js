// function
function greet(name, callback) {
   console.log('Hi' + ' ' + name);
   callback();
}

// função callback
function callMe() {
   console.log('I am callback function');
}

// passando a função como um argumento
greet('Peter', callMe);