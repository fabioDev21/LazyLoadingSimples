const url = "https://dog.ceo/api/breeds/image/random"

window.addEventListener("load", () =>{
    efeitoImagemScroll()
    pegaDados()
})

document.querySelector("#attPage").addEventListener("click", () => {
    window.location.reload()
})

async function pegaDados(){
    try {
        const imagensCachorros = []
        for(i = 0; i < 25; i++){
            const response = await axios.get(url)
            imagensCachorros.push(response.data.message)
        }
        atualizaImagens(imagensCachorros)
    } catch (error) {
        console.log("Deu erro aqui!" + error)
    }
}

async function atualizaImagens(imagensCachorros){
    const totImgs = document.querySelectorAll("img")
    totImgs.forEach((imagem, i) => {
        if(i < totImgs.length){
            imagem.setAttribute("data-src",imagensCachorros[i])
        }
    })
    efeitoImagemScroll()
}

window.addEventListener("scroll", () => {
    sobeTopo()
    efeitoImagemScroll()
})

function efeitoImagemScroll(){
    document.querySelectorAll('img').forEach(imagem => {
        if(imagem.getBoundingClientRect().top < window.innerHeight){
            imagem.src = imagem.getAttribute("data-src")
        }
    })
}

function sobeTopo(){
    const body = document.querySelector("body")
    const btnSobeTopo = document.querySelector("#arrowUp")
    
    // console.log(body.getBoundingClientRect().top)
    if(body.getBoundingClientRect().top < -200){
        btnSobeTopo.style.opacity = 1
    }
    if(body.getBoundingClientRect().top > -200){
        btnSobeTopo.style.opacity = 0
    }
}

