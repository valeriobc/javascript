
function contar() {
   var nuinobj = window.document.querySelector('input#nuin')
   var nuin = Number(nuinobj.value)
   var c = nuin
   var nufiobj = window.document.querySelector('input#nufi')
   var nufi = Number(nufiobj.value)
   var passoobj = window.document.querySelector('input#passo')
   var passo = Number(passoobj.value)
   var res = window.document.querySelector('div#res')

   if (nuinobj.value.length == 0) {
      res.innerHTML = 'Impossível contar: Sem Valor de Início!'

   } else if (nufiobj.value.length == 0) {
      res.innerHTML = 'Impossível contar: Sem Valor de Fim!'

   } else if (passoobj.value.length == 0 || passo == 0 || passo < 0) {
      window.alert('Impossível contar: Valor de Passo Inválido! Considerando passo = 1')
      passo = 1
      if (nufi >= c) {
         res.innerHTML = `Contando: <br>`
         for ( c ; c <= nufi ; c += passo ) {
            res.innerHTML += ` ${c} \u{1f449}`
            //res.innerHTML += `&#x1f449`
         }
         //res.innerHTML += `&#x1f3c1`
      res.innerHTML += `\u{1f3C1}` 
   
      } else  {
         res.innerHTML = `Contando: <br>`
         for ( c ; c >= nufi ; c -= passo ) {
            res.innerHTML += ` ${c} \u{1f449}`
            //res.innerHTML += `&#x1f449`
         }
         //res.innerHTML += `&#x1f3c1`
         res.innerHTML += `\u{1f3C1}` 
      } 

   } else if (nufi >= c) {
      res.innerHTML = `Contando: <br>`
      for ( c ; c <= nufi ; c += passo ) {
         res.innerHTML += ` ${c} \u{1f449}`
         //res.innerHTML += `&#x1f449`
      }
      //res.innerHTML += `&#x1f3c1`
      res.innerHTML += `\u{1f3C1}` 
   } else  {
      res.innerHTML = `Contando: <br>`
      for ( c ; c >= nufi ; c -= passo ) {
         res.innerHTML += ` ${c} \u{1f449}`
         //res.innerHTML += `&#x1f449`
      }
      //res.innerHTML += `&#x1f3c1`
      res.innerHTML += `\u{1f3C1}` 
   } 
}
