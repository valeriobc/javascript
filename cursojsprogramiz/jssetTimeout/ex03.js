// programa para mostrar a hora a cada 3 segundos
function showTime() {

   // retorna a nova data e hora
   let dateTime = new Date();

   // retorna a hora local atual
   let time = dateTime.toLocaleTimeString();

   console.log(time);

   // mostra a hora após 3 segundos
   setTimeout(showTime, 3000);
}
// chamando a função
showTime();