// programa para achar o fatorial de um número
function factorial(x) {

   // se o número é zero
   if(x === 0) {
      return 1
   }

   // se  o número é positivo
   else {
      return x * factorial(x-1);
   }
}

let num = 3;

// chama factorial() se num for positivo
if (num > 0) {
   let result = factorial(num);
   console.log(`O fatorial de ${num} é ${result}`);
}