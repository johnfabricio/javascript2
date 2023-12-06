function calcular(){
    var fvalor = window.document.getElementById('txtvalor')
    var valor = Number(fvalor.value)
    var res = document.getElementById('res')
    var prod = 1
    
    for (var c = 1; c < valor; c++ ){
        prod = c*valor
        res.innerHTML += `${valor} x ${c} = ${prod} `
        
    }

}