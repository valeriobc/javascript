let dailyActivities = ['sleep', 'work', 'exercise'];
let newRoutine = ['eat'];

// classificando elementos em ordem alfabética
dailyActivities.sort();
console.log(dailyActivities); // [ 'exercise', 'sleep', 'work' ]

// encontrando a posição de uma string
const position = dailyActivities.indexOf('work');
console.log(position); // 2

// fatiando os elementos do array
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work' ]

// concatenando dois arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // [ 'exercise', 'sleep', 'work', 'eat' ]