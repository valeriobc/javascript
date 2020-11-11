let num = []
let numobj = window.document.querySelector('input#txtnum')
let resobj = window.document.querySelector('div#res')
numobj.value = ''
numobj.focus()

function adicionar() {
   
   let selobj = window.document.querySelector('select#selana')
   let numexiste = num.indexOf(Number(numobj.value))
   if (numobj.value.length == 00 || numobj.value == 00 || numobj.value > 100 || numexiste != -1) {
      window.alert('[ERRO!] Valor inválido ou já encontrado na lista!')
   } else {
      num.push(Number(numobj.value))
      let item = window.document.createElement('option')
      item.text = `Valor ${numobj.value} adiccionado na p${num.length-1}`
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
      let soma = 0
      let maior = num[0]
      let menor = num[0]
      for(let pos in num) {
         if(num[pos] > maior) {
            maior = num[pos]
         }
         if(num[pos] < menor) {
            menor = num[pos]
         }
         soma += num[pos]
      }
      resobj.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
      resobj.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
      resobj.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
      resobj.innerHTML += `<p>A média dos valores digitados é ${(soma / num.length).toFixed(2).replace('.', ',')}.</p>`
   }
   numobj.value = ''
   numobj.focus()
}