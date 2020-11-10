let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
   if (Number(n) >= 1 && Number(n) <= 100) {
      return true
   } else {
      return false
   }
}

function inLista(n, l) {
   if (l.indexOf(Number(n)) != -1) {
      return true
   } else {
      return false
   }
}
function adicionar() {
   if (isNumero(num.value) && !inLista(num.value, valores)) {

   } else {
      window.alert('Valor inválido ou já encontrado na lista.')
   }
}
   /*
   let numexiste = num.indexOf(numobj.value)
   if (numobj.value.length == 00 || numobj.value == 00 || numobj.value > 99 || numexiste != -1) {
      window.alert('[ERRO!] Valor inválido ou já encontrado na lista!')
   } else {
      num[pos] = numobj.value
      //window.alert(`pos = ${pos} e num[pos] = ${num[pos]}`)
      if (pos == 0) {
         selobj.innerHTML = ''
      }
      let item = window.document.createElement('option')
      item.text = `Valor ${num[pos]} adiccionado na p${pos}`
      selobj.appendChild(item)
      pos++
   }
   numobj.value = ''
   numobj.focus()
}

function finalizar() {
   let resobj = window.document.querySelector('div#res')
   resobj.innerHTML = ''
   resobj.innerHTML += `Ao todo, temos ${num.length} números cadastrados. <br> <br>`
   num.sort()
   let ultnum = num[num.length - 1]
   resobj.innerHTML += `O maior valor informado foi ${ultnum}. <br> <br>`
   resobj.innerHTML += `O menor valor informado foi ${num[0]}. <br> <br>`
   var soma = 0
   for (let c in num) {
      soma += Number(num[c])
   }
   resobj.innerHTML += `Somando todos os valores, temos ${soma}. <br> <br>`
   resobj.innerHTML += `A média dos valores digitados é ${(soma / num.length).toFixed(2).replace('.', ',')}. <br> <br>`
   numobj.value = ''
   numobj.focus()
} */