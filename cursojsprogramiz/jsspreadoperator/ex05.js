const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

// adiciona membros dos objetos obj1 obj2 ao obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3); // { x:1,  y: 2, z: 3 }