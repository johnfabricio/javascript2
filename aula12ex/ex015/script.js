function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert(' Preencha o ano corretamente')
    }
    else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var genero = ''
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade==0 && idade<18){
                //criança
            }
            else if(idade<21){
                //Jovem
            }
            else if(idade<60){
                //Adulto
            }
            else{
                //idoso
            }
        }

        else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
    }

}
