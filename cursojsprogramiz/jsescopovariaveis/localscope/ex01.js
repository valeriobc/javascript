// programa mostrando um local scope de uma variável
let a = "hello";

function greet() {
   let b = " World";
   console.log(a+b);
}

greet();
console.log(a+b); // error