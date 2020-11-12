/* programa para achar a soma de números positivos, se o usuário entrar um 
número negativo, o break finaliza o loop e o número entrado não é 
adicionado ao somatório*/

let sum = 0, number;

while(true) {
   // pega a entrada novamente se o número é positivo
   number = parseInt(prompt("Entre um ´numero: "));

   // break condition
   if(number < 0) {
      break;
   }
   // adciona os números positivos
   sum += number
}
// mostra a soma
console.log(`A soma é ${sum}.`);