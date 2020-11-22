let person = {
   name: 'Jack',
   age: 25,
   sayName: () => {
      // this refere-se ao objeto global ...
      //
      console.log(this.age);
   }
}

person.sayName(); // undefined