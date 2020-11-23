// retorna uma promessa
let countValue = new Promise(function (resolve, reject) {
   reject('Promise rejected');
});

// executa quando a promessa é resolvida com sucesso
countValue.then(
   function successValue(result) {
      console.log(result); // Promessa resolvida
   },
)