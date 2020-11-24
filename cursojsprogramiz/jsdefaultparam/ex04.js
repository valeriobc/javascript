// usando uma função na expressão de valor padrão

const sum = () => 15;

const calculate = function( x, y = x * sum() ) {
   return x + y;
}

const result = calculate(10);
console.log(result); // 160