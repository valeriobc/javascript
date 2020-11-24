api().then(function(result) {
   return api2();
}).then(function(result2) {
   return api3();
}).then(function(result3) {
   // funcionou
}).catch(function(error) {
   // manipula qualquer erro que possa ter ocorrido antes desse ponto
});