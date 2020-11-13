// programa para adicionar dois números usando return
// declarando a função
function add(a, b) {
   return a + b;
}
// pegando entrada feita pelo usuário
let number1 = parseFloat(prompt("Entre primeiro número: "));
let number2 = parseFloat(prompt("Entre segundo número: "));

//chamando a função
let result = add(number1, number2);

//mostrando o resultado
console.log(result);