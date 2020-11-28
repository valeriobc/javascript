const regex1 = /^ab/;

const regex = new RegExp(/^a...s$/);

console.log(regex.test('alias')); // true

console.log(regex1.test('a bacaxi'));