function sum() {
   let a = 0;
   function increaseSum() {

      // o valor de a é incrementado por 1
      return a = a + 1;
   }
   return increaseSum;
}

let x = sum();
let a = 5;
console.log(x()); // 1
console.log(x()); // 2
console.log(a); // 5