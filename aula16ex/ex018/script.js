let num = []
let numobj = window.document.querySelector('input#txtnum')
let resobj = window.document.querySelector('div#res')
numobj.value = ''
numobj.focus()

function adicionar() {
   
   let selobj = window.document.querySelector('select#selana')
   let numexiste = num.indexOf(numobj.value)
   if (numobj.value.length == 00 || numobj.value == 00 || numobj.value > 99 || numexiste != -1) {
      window.alert('[ERRO!] Valor inválido ou já encontrado na lista!')
   } else {
      num.push(Number(numobj.value))
      let item = window.document.createElement('option')
      item.text = `Valor ${num[pos]} adiccionado na p${numexiste}}`
      selobj.appendChild(item)
      resobj.innerHTML = ''
   }
   numobj.value = ''
   numobj.focus()
}

function finalizar() {
   if (num.length == 0) {
      window.alert('Adicione valores antes de finalizar')
   } else {
      
      resobj.innerHTML = ''
      resobj.innerHTML += `<p>Ao todo, temos ${num.length} números cadastrados.</p>`
      num.sort()
      let ultnum = num[num.length - 1]
      resobj.innerHTML += `<p>O maior valor informado foi ${ultnum}.</p>`
      resobj.innerHTML += `<p>O menor valor informado foi ${num[0]}.</p>`
      var soma = 0
      for (let c in num) {
         soma += Number(num[c])
      }
      resobj.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
      resobj.innerHTML += `<p>A média dos valores digitados é ${(soma / num.length).toFixed(2).replace('.', ',')}.</p>`
   }
   numobj.value = ''
   numobj.focus()
}