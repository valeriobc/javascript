// define Map
let map = new Map();

// inserindo elementos em Map
map.set('name', 'Jack');
map.set('age', '27');

// laço através de Map
for (let [key, value] of map) {
   console.log(key + '- ' + value);
}