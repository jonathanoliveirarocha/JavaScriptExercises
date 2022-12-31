function conta(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length==0 || passo.value.length==0){
        res.innerHTML = 'Impossível contar!'
    }else{
            res.innerHTML = 'Contando: '
            inicio = Number(inicio.value)
            fim = Number(fim.value)
            passo= Number(passo.value)
            var atual = inicio
            if(passo<=0){
                alert('Passo inválido! Considerando passo 1')  
                passo = 1
            }      
            if(inicio<fim){
                while(atual<=fim){
                    res.innerHTML += `${atual}👉`
                    atual+=passo
                }
            }else{
                while(atual>=fim){
                    res.innerHTML += `${atual}👉`
                    atual-=passo
                }

            }
            res.innerHTML += '🏁'
    }
}