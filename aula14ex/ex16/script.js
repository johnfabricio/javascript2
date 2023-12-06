
function calcular(){

    var fa1 = document.getElementById('a1')
    var fan = document.getElementById('an')
    var fr = document.getElementById('r')
    var a1 = Number(fa1.value)
    var an = Number(fan.value)
    var r = Number(fr.value)
    var res = window.document.querySelector('div#res')
    
    for (var c = a1; c<=an; c= c+r){
        res.innerHTML += `${c} `
    }
}


