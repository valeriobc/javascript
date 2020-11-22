// ES5
asyncFunction().then(function() {
   return asyncFunction1();
}).then(function() {
   return asyncFunction2();
}).then(function() {
   finish;
});

// pode ser escrita como
// ES6
asyncFunction()
.then(() => asyncFunction1())
.then(() => asyncFunction2())
.then(() => finish);