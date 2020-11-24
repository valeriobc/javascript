// retorna uma promessa
let countValue = new Promise(function (resolve, reject) {
   reject('Promise rejected');
});

// é executado quando a promessa é resolvida com sucesso
countValue.then(
   function successValue(result) {
      console.log(result);
   },
)

// executa se ocorreu um erro
.catch(
   function errorValue(result) {
      console.log(result);
   }
);