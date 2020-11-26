// programa para parar o método setTimeout()

let count = 0;

// criação da função
function increaseCount() {

   // incrementando o count por 1
   count += 1;
   console.log(count);
}

let id = setTimeout(increaseCount, 3000);

// clearTimeout
clearTimeout(id);
console.log('setTimeout is stopped');