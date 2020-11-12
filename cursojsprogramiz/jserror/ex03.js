/* try {
   setTimeout(function() {
      // error in the code
   }, 3000);
} catch(e) {
   console.log("won't work");
} */

setTimeout(function() {
   try {
      // error in the code
   } catch(error) {
      console.log("error is caught");
   }
}, 3000);