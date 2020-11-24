let a = 0;
function sum() {
   function increaseSum() {

      // o valor de a é incrementado por 1
      return a = a + 1;
   }
   return increaseSum;
}
const x = sum();
console.log(x()); // 1
console.log(x()); // 2
console.log(x()); // 3
a = a + 1;
console.log(a); // 4