// objeto JSON
const data = {
   "name": "John",
   "age": 22,
   "hobby": {
      "reading" : true,
      "gaming" : false,
      "sport" : "football"
   },
   "class" : ["JavaScript", "HTML", "CSS"]
}

// acessando o objeto JSON
console.log(data.name); // John
console.log(data.hobby); // { reading : true, gaming: false, sport: 'football' }

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML 