// programa para parar o método setInterval após cinco vezes
let count = 0;

// criação da função
let interval = setInterval(function() {

   // incrementando o contador por 1
   count += 1;

   // quando count é igual a 5, para a função
   if(count === 5) {
      clearInterval(interval);
   }

   // mostra a hora atual
   let dateTime = new Date();
   let time = dateTime.toLocaleTimeString();
   console.log(time);
}, 2000);