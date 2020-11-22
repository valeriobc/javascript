let dailyActivities = [ 'work', 'eat', 'sleep', 'exercise'];

// removendo o último elemento
dailyActivities.pop();
console.log(dailyActivities); // [ 'work', 'eat', 'sleep' ]

// remove o último elemento de [ 'work', 'eat', 'sleep' ]
const removedElement = dailyActivities.pop();

// imprime o elemento removido e o array restante
console.log(removedElement); // sleep
console.log(dailyActivities); // [ 'work', 'eat' ]