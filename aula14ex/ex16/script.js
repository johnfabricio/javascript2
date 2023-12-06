
function calcular(){
    var fa1 = document.getElementById('a1')
    var fan = document.getElementById('an')
    var fr = document.getElementById('r')
    var a1 = Number(fa1.value)
    var an = Number(fan.value)
    var r = Number(fr.value)
    var res = window.document.querySelector('div#res')

    if (r==0){
        window.alert('Impossível o passo ser 0(zero). Considerando passo 1')
        r =1
    }
    
    if (fa1.value.length == 0 || fan.value.length == 0 || fr.value.length == 0) {
        window.alert('ERRO! Prencha todos os dados')
    } else
        if (a1<an){
            for (var c = a1; c<=an; c+=r)
                {res.innerHTML += `${c} `
            }
        } else{
            for (var c = a1; c>=an; c-=r)
                {res.innerHTML += `${c} `
            }
        }
        
}



