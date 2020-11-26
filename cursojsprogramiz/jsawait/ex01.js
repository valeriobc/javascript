// uma promessa
let promise = new Promise(function (resolve, reject) {
   setTimeout(function () {
   resolve('Promise resolved')}, 4000);
});

// async function
async function asyncFunc() {

   // aguarda até a promessa ser resolvida
   let result = await promise;

   console.log(result);
   console.log('hello');
}

// chamando a função assíncrona
asyncFunc();