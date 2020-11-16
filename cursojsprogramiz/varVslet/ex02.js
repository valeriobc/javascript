// programa para imprimir texto
// variável a não pode ser usada aqui
function greet() {
   let a = 'hello';

   // variável b não pode ser usada aqui
   if(a == 'hello') {
      // variável b pode ser usada aqui
      let b = 'world';
      console.log(a + ' ' + b);
   }

   // variável b não pode ser usada aqui
   console.log(a + ' ' + b); // error
}
// variável a não pode ser usada aqui

greet();