let id = Symbol("id");

let person = {
   name: "Jack",
   age: 25,
   [id]: 12
};

// usando for...in
for (let key in person) {
   console.log(key);
}
