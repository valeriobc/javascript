
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

   } else if (passoobj.value.length == 0 || passo == 0) {
      window.alert('Impossível contar: Valor de Passo Inválido! Considerando passo = 1')
      passo = 1
      if (nufi >=0) {
         res.innerHTML = `Contando: <br>`
         while (c <= nufi) {
            res.innerHTML += `${c}`
            res.innerHTML += `&#x1f449`
            c += passo
         }
      } else {
         res.innerHTML = `Contando: <br>`
         while (c > nufi) {
            res.innerHTML += `${c}`
            res.innerHTML += `&#x1f449`
            c -= passo
         }
      } 
      
   } else if (nufi >=0) {
      res.innerHTML = `Contando: <br>`
      while (c <= nufi) {
         res.innerHTML += `${c}`
         res.innerHTML += `&#x1f449`
         c += passo
      }
   } else {
      res.innerHTML = `Contando: <br>`
      while (c > nufi) {
         res.innerHTML += `${c}`
         res.innerHTML += `&#x1f449`
         c -= passo
      }
   } 
}
