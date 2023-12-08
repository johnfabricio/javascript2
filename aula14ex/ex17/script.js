function calcular(){
    var fvalor = window.document.getElementById('txtvalor')
    var res = document.getElementById('seltab')
    
    
    if (fvalor.value.length == 0){
        window.alert('ERRO! Por favor, preencha o valor')
    } else{
        var valor = Number(fvalor.value)
        c = 1
        res.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${valor} x ${c} = ${valor*c}`
            res.appendChild(item)
            c++
        }
        
    }
}