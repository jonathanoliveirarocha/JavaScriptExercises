function verificar(){ 
    var anoAtual = new Date().getFullYear()  
    var anoNasc = document.getElementById('anoNasc').value
    if (testaErro(anoAtual, anoNasc)==true){
        var arrayResposta = defineValores(anoAtual, anoNasc)
        document.getElementById('res').innerText = `Você é ${arrayResposta[0]} de ${arrayResposta[1]}`
        document.getElementById('img').src = `${arrayResposta[2]}`
    }
}

function testaErro(a, n){
    if (n>a || (n<1900 )){
        alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        return true
    }
}

function defineValores(a,n){
    var idade = a-n
    if (document.getElementsByName('radsex')[0].checked){
        var genero = 'm'
        document.body.style.background = "rgb(176, 193, 231)"
    }else{
        var genero = 'f'
        document.body.style.background = "rgb(231, 176, 228)"
    } 
    var termo
    var imagem
    if (idade<5){
        termo = 'um bebê'
        if(genero=='m'){
            imagem = './Imagens/bebeMenino.png'
        }else{
            imagem = './Imagens/bebeMenina.png'
        }
    } else if(idade<12){
        if (genero=='m'){
            termo = 'um garoto'
            imagem = './Imagens/garoto.png'
        }else{
            termo = 'uma garota'
            imagem = './Imagens/garota.png'
        }
    } else if(idade<18){
        if (genero=='m'){
            termo = 'um adolescente'
            imagem = './Imagens/adolescenteMenino.png'
        }else{
            termo = 'uma adolescente'
            imagem = './Imagens/adolescenteMenina.png'
        }
    } else if(idade<45){
        if (genero=='m'){
            termo = 'um homem'
            imagem = './Imagens/homem.png'
        }else{
            termo = 'uma mulher'
            imagem = './Imagens/mulher.png'
        }
    }else{
        if (genero=='m'){
            termo = 'um senhor'
            imagem = './Imagens/senhor.png'
        }else{
            termo = 'uma senhora'
            imagem = './Imagens/senhora.png'
        }
    }
    return [termo,idade, imagem]
}