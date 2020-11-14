// programa mostrando o conceito de variável com escopo de bloco
// global variável
let a = 'Hello';

function greet(){
   
   // variável local
   let b = 'World';

   console.log(a + ' ' + b);

   if(b == 'World') {
      // variavel com escopo de bloco
      let c = 'hello';

      console.log(a + ' ' + b + ' ' + c);
   }

   // a variável c não pode ser acessada aqui
   console.log(a + ' ' + b + ' ' + c);
}

greet();