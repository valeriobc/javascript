const number = 40;
try {
   if(number > 50) {
      console.log('Success');
   } else {
      // usuário definindo a instrução throw
      throw new Error('The number is low');
   }

   // se throw for executado o código abaixo não é executado
   console.log('hello');
}
catch(error) {
   console.log('An error caught');
   console.log('Error message: ' + error);
}