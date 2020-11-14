// programa para nostrar a alteração de uma varável global
let a = "hello";

function greet() {
   a = 3;
}

// antes da função ser chamada
console.log(a); // hello

greet();
// após a função ser chamada
console.log(a);// 3