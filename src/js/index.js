const botaoAlterarTema = document.getElementById("change_theme");
const body = document.querySelector("body");
const imagembotaotrocadetema = document.querySelector(".image-button");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagembotaotrocadetema.setAttribute("src","./src/imagens/sun.png");
    } else {
        imagembotaotrocadetema.setAttribute("src","./src/imagens/moon.png");
    }
})
