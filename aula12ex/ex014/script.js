function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#8098b0'
    }
    else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#ffac34'
    }
    else{
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.background ='#0b0a2c'
    }
}


