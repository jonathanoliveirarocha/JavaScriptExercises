function calcular(){
    var numero = document.getElementById('numero').value
    if(numero.length==0){
        alert('[ERRO] É necessário digitar algum valor!')
    }else{
        document.getElementById('tab').innerHTML = ''
        numero = Number(numero)
        for(var i=1;i<=10;i++){
            var opcao = document.createElement('option')
            opcao.text = `${numero} x ${i} = ${numero*i}`
            opcao.value = `opcao${i}`
            document.getElementById('tab').appendChild(opcao)
        }
    }
}