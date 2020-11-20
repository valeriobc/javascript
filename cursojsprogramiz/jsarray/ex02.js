let dailyActivities = ['eat', 'sleep'];

// adicionando um elemento no fim do array
console.log(dailyActivities.push('exercise')); // 3 é o novo comprimento do array

console.log(dailyActivities); // [ 'eat', 'sleep', 'exercise' ]

// adicionando um elemento no início do array
console.log(dailyActivities.unshift('work')); // 4 é o novo comprimento do array

console.log(dailyActivities); // [ 'work', 'eat', 'sleep', 'exercise' ]