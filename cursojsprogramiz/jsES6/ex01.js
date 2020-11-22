// variável declarada usando let
let name = 'Sara';
{
   // pode ser acessada somente dentro 
   let name = 'Peter';

   console.log(name); // Peter
}
console.log(name); // Sara