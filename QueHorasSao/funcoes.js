function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora<12){
        //Bom Dia!
        imagem.src = "./imagens/manha.png"
        document.body.style.background = "rgb(216, 219, 185)"
       
    } else if (12<= hora && 18>hora){
        //Boa Tarde!
        imagem.src = "./imagens/tarde.png"
        document.body.style.background = "rgb(236, 199, 142)"

    } else {
        //Boa Noite!
        imagem.src = "./imagens/noite.png"
        document.body.style.background = "rgb(65, 99, 138)"
        
    }
}
