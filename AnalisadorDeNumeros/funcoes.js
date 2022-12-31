var arrayRes = []
var valOpcao = 1
var valores= document.getElementById('valores')
function adicionar(){
    var numero = Number(document.getElementById('numero').value)
    if(numero>100 || numero<1 || !naLista(numero,arrayRes)){
        alert('[ERRO] Valor inválido ou já encontrado na lista!')
    }else{
        arrayRes.push(numero)
        var opcao = document.createElement('option')
        opcao.text = `Você selecionou o valor ${numero}`
        opcao.value= `opcao${valOpcao}`
        valOpcao++
        document.getElementById('valores').appendChild(opcao)
    }
    
}
function finalizar(){
    if(arrayRes.length==0){
        alert('[ERRO] Adicione valores antes de finalizar!')
    }else{
        var tamanho = arrayRes.length
        var maior = max()
        var menor = min() 
        var soma = sum()
        var media = soma/tamanho
        var res = document.getElementById('analisando')
        res.innerHTML = `<p>Você inseriu ${tamanho} números</p>`
        res.innerHTML += `<p>O maior valor selecionado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor valor selecionado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos elementos selecionados é ${soma}`
        res.innerHTML += `<p>A média dos elementos selecionados é ${media}</p>`
    }
}
function naLista(n,a){
    if(a.indexOf(n)==-1){
        return true
    }else{
        return false
    }
}
function min(){
    var menor = arrayRes[0]
    for(var i = 1; i<arrayRes.length;i++){
        if(arrayRes[i]<menor){
            menor = arrayRes[i]
        }
    }
    return menor
}
function max(){
    var maior = arrayRes[0]
    for(var i = 1; i<arrayRes.length;i++){
        if(arrayRes[i]>maior){
            maior = arrayRes[i]
        }
    }
    return maior
}
function sum(){
    soma = arrayRes[0]
    for(i=1;i<arrayRes.length;i++){
        soma+=arrayRes[i]
    }
    return soma
}