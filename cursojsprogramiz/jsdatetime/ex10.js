const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

// mostra um format específico
let monthDateYear = (month+1) + '/' + date + '/' + year;

console.log(monthDateYear); // 11/25/2020