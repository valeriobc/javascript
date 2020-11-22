function Person() {
   this.name = 'Jack',
   this.age = 25,
   this.sayName = function () {

      // this é acessível
      console.log(this.age);

      function innerFunc() {

         // this refere-se ao objeto global
         console.log(this.age);
         console.log(this);
      }

      innerFunc();
      
   }
}

let x = new Person();
x.sayName();