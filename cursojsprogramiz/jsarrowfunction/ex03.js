let age = 5;

let welcome = (age < 18) ?
   () => console.log('Baby') :
   () => console.log('Adult');

welcome(); // Baby