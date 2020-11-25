const timeInMilliseconds = Date.now();
console.log(timeInMilliseconds); // 1606310747805

const time = new Date;

// obtém o dia do mês
const date = time.getDate();
console.log(date); // 25

// obtém dia da semana
const dayWeek = time.getDay();
console.log(dayWeek); // 3

const utcDate = time.getUTCDate();
console.log(utcDate); // 25

const evento = new Date('Feb 19, 2020 23:15:30');
// definir a data
evento.setDate(15);
console.log(evento.getDate()); // 15

// somente 28 dias em fevereiro
evento.setDate(35);

console.log(evento.getDate()); // 6