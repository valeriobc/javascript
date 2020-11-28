// programa para validar número de telefone
function validatePhone(num) {
   const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

   // verifica se o número de telefone é válido
   let result = num.match(re);
   console.log(result);
   if (result) {
      console.log('The number is valid.');
   }
   else {
      //let num = prompt('Enter number in XXX-XXX-XXXX, format');
      console.log('Entrando nº 234-322-3432');
      let num2 = '234-322-3432';
      validatePhone(num2);
   }
}

// take input
console.log('Entrando nº 234-323-3432');
let number = '234-322-3432'; //prompt('Enter a number XXX-XXX-XXXX format');
validatePhone(number);