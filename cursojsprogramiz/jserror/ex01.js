
// programa para demonstrar o uso de try...catch

const numerator = 100, denominator = 'a';

try {
   console.log(numerator/denominator);

   // não foi definida variável a
   console.log(a);
}
catch(error) {
   console.log('An error caught');
   console.log('Error message: ' + error);
}
