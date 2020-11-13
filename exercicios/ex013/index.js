var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem) {
   case 0:
      console.log('Hoje é Domingo missa e praia céu de anil')
      break
   case 1:
      console.log('Segunda-Feira')
      break
   case 2:
      console.log('Terça-Feira')
      break
   case 3:
      console.log('Quarta-Feira')
      break
   case 4:
      console.log('Quinta-Feira')
      break
   case 5:
      console.log('Sexta-Feira')
      break
   case 6:
      console.log('Sábado')
      break
   default:
      console.log('[ERRO] Dia Inválido')
      break
}