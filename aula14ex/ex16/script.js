
function calcular(){

    var fa1 = window.document.getElementById('a1')
    var fan = window.document.getElementById('an')
    var fr = window.document.getElementById('r')
    var a1 = Number(fa1.value)
    var an = Number(fan.value)
    var r = Number(r.value)
    var res = window.document.querySelector('div#res')
    
    res.innerHTML = `Primeiro ${a1} último ${an} e passo ${r}`
}


