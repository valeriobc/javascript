countDown(4);

function countDown(number) {
   
   // mostra o número
   console.log(number);

   // decrementa o valor do número
   const newNumber = number - 1;
   
   // condição básica
   if(newNumber > 0) {
      countDown(newNumber);
   }
}

