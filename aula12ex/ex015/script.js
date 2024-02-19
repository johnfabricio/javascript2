function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! - Preencha o ano corretamente')
    }
    else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img') //Cria-se dinamicamente uma img usando Javascript
        img.setAttribute('id','foto')
        var genero = ''
    
        if (fsex[0].checked) {
            if (idade>=0 && idade<18){
                //criança
                genero = 'Criança'
                img.setAttribute('src','crianca-h.jpg')  
            }
            else if(idade<=21){
                //Jovem
                genero = 'Jovem'
                img.setAttribute('src','jovem-h.jpg')
            }
            else if(idade<60){
                //Adulto
                genero = 'Adulto'
                img.setAttribute('src','adulto-h.jpg')
            }
            else{
                //idoso
                genero = 'Idoso'
                img.setAttribute('src','idoso-h.jpg')
            }
        }
        
        else if (fsex[1].checked) {
            if (idade>=0 && idade<18){
                //criança
                genero = 'menina'
                img.setAttribute('src','crianca-m.jpg')
            }
            else if(idade<21){
                //Jovem
                genero = 'jovem'
                img.setAttribute('src','jovem-m.jpg')
            }
            else if(idade<60){
                //Adulto
                genero = 'adulta'
                img.setAttribute('src','adulta-m.jpg')
            }
            else{
                //idoso
                genero = 'idosa'
                img.setAttribute('src','idosa-m.jpg')
            }
        }
        res.style.textAlign = 'center' //Centraliza o res usando javascript
        res.innerHTML = `<p>Detectamos um <strong>${genero}</strong> com ${idade} anos</p>`
        res.appendChild(img)
    }

}
