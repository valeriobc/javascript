// uma promessa
let promise = new Promise(function (resolve, reject) {
   setTimeout(function () {
   resolve('Promise resolved')}, 4000);
});

// async function
async function asyncFunc() {
   try {
      // espera até a promessa ser resolvida
      let result = await promise;

      console.log(result);
   }
   catch(error) {
      console.log(error);
   }
}

// chamando a função async
asyncFunc(); // Promise resolved