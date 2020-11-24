// retorna uma promessa
let countValue = new Promise(function (resolve, reject) {
   // pode ser resolvido ou rejeitado
   resolve('Promise resolved');
});

// adicionando outro bloco de código
countValue.finally(
   function greet() {
      console.log('This code is executed.');
   }
);