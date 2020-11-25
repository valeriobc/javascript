// short date format "MM/DD/YYYY"
const date = new Date("03/25/2015");
console.log(date); // 2015-03-25T03:00:00.000Z

// long date format "MMM DD YYYY"
const date1 = new Date("Jul 1 2020");
console.log(date1); // 2020-07-01T03:00:00.000Z

// mês e dia pode ser em qualquer ordem
const date2 = new Date("1 Jul 2020")
console.log(date2); // 2020-07-01T03:00:00.000Z

// O mês pode ser escrito todo ou abreviado. Independe se maiúsculo ou minúsculo
// vírgulas são ignoradas
const date3 = new Date("July 1 2020"); // 2020-07-01T03:00:00.000Z
console.log(date3); 

const date4 = new Date("JULY, 1, 2020");
console.log(date4); // 2020-07-01T03:00:00.000Z