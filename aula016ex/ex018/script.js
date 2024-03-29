let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
function isNumero(n){
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
    
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){ //Se a valor n NÃO foi encontrado na lista l(Por isso -1)
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já adicionado na lista')
    }
    num.value = ''
    num.focus() //O imput fica vazio e o pontador volta sozinho
}

function verificar(){
    if(valores.length == 0){
        window.alert('Adicione um valor antes de finalizar')
    } else{
        let total =  valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Foi adicionado um total de ${total} elementos</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valo é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}