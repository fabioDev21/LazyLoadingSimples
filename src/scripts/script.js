const url = "https://dog.ceo/api/breeds/image/random"

const pegaDados = async () => {
    try {
        const imagensCachorros = []
        for(i = 0; i <= 12; i++){
            const response = await axios.get(url)
            imagensCachorros.push(response.data)
        }
        mostraDados(imagensCachorros)
    } catch (error) {
        console.log("Deu erro aqui!" + error)
    }
}

window.addEventListener("load", () => {
    pegaDados()
})

function mostraDados(imagensCachorros){
    const divTotal = document.querySelector("#imagensCachorros")
    imagensCachorros.forEach(imagem => {
        const subDiv = document.createElement("div")
        subDiv.classList.add("subDivImages")
        subDiv.innerHTML = `<img data-src="${imagem.message}">`
        divTotal.append(subDiv)
        efeitoImagemScroll()  
    })
}
window.addEventListener("scroll", efeitoImagemScroll)

function efeitoImagemScroll(){
    document.querySelectorAll('img').forEach(imagem => {
        if(imagem.getBoundingClientRect().top < window.innerHeight){
            imagem.src = imagem.getAttribute("data-src")
        }
    })
}