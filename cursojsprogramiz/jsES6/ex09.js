function show(a, b, ...args) {
   console.log(a); // one
   console.log(b); // two
   console.log(args); // [ 'three', 'four', 'five', 'six' ]
}

show('one', 'two', 'three', 'four', 'five', 'six');