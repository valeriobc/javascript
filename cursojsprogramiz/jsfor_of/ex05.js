// criando um objeto iterável
const iterableOb = {

   // método iterador
   [Symbol.iterator]() {
      let step = 0;
      return {
         next() {
            step++;
            if (step === 1) {
               return { value: '1', done: false};
            }
            else if (step === 2) {
               return { value: '2', done: false};
            }
            else if (step === 3) {
               return { value: '3', done: false};
            }
            return { value: '', done: true};
         }
      }
   }
}

// iterando usando for...of
for (const i of iterableOb) {
   console.log(i);
}