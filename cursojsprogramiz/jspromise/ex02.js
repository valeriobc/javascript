// retorna uma promessa
let countValue = new Promise(function (resolve, reject) {
   resolve('Promise resolved'); });

   // é executado quando a promessa é resolvida com sucesso
   countValue.then(
      function successValue(result) {
         console.log(result);
      },
   )
   .then(
      function successValue1() {
         console.log('You can call multiple functions this way.');
      },
   );