const number = 2;
try {
   // instrução throw definida pelo usuário
   throw new Error('This is the throw');
}
catch(error) {
   console.log('An error caught');
   if (number + 8 > 10) {

      // instruções para manipular exceções
      console.log('Error message: ' + error);
      console.log('Error resolvido');
   } else {
      // não pode manipular a exceção
      // rethrow a exceção
      throw new Error('The value is low');
   }
}