function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   //var fano = window.document.getElementById('txtano')
   var fano = window.document.querySelector('input#txtano')
   var res = window.document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
      var fsex = window.document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = window.document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
         //genero = 'Homem'
         if (idade >=0 && idade < 10) {
            //Criança
            genero = 'Menino'
            img.setAttribute('src', 'foto-bebe-m.png')
            img.setAttribute('alt', 'Foto Bebê Masculino')
         } else if (idade < 21) {
            //Jovem
            genero = 'Moço'
            img.setAttribute('src', 'foto-jovem-m.png')
            img.setAttribute('alt', 'Foto Jovem Masculino')
         } else if (idade < 50) {
            //Adulto
            genero = 'Senhor Adulto'
            img.setAttribute('src', 'foto-adulto-m.png')
            img.setAttribute('alt', 'Foto Adulto Masculino')
         } else {
            //Idoso
            genero = 'Senhor Idoso'
            img.setAttribute('src', 'foto-idoso-m.png')
            img.setAttribute('alt', 'Foto Idoso Masculino')
         }
      } else if (fsex[1].checked) {
         //genero = 'Mulher'
         if (idade >=0 && idade < 10) {
            //Criança
            genero = 'Menina'
            img.setAttribute('src','foto-bebe-f.png')
            img.setAttribute('alt', 'Foto Bebê Menina')
         } else if (idade < 21) {
            //Jovem
            genero = 'Moça'
            img.setAttribute('src', 'foto-jovem-f.png')
            img.setAttribute('alt', 'Foto Mulher Jovem')
         } else if (idade < 50) {
            //Adulto
            genero = 'Senhora Adulta'
            img.setAttribute('src', 'foto-adulto-f.png')
            img.setAttribute('alt', 'Foto Mulher Adulta')
         } else {
            //Idoso
            genero = 'Senhora Idosa'
            img.setAttribute('src', 'foto-idoso-f.png')
            img.setAttribute('alt', 'Foto Mulher Idosa')
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
   }
}