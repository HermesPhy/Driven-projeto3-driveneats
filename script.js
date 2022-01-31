function opcaoPrato(classePrato, classeMarcaP) {

    const borda = document.querySelector(".borda");
    if (borda !== null) {
        borda.classList.remove("borda");
    }
    const prato = document.querySelector("." + classePrato);
    prato.classList.add("borda");

    var sumir = document.querySelector(".marcador");
    if (sumir.classList.contains("sumir") !== false) {
        sumir.classList.add("sumir");
    }
    const marcaP = document.querySelector("." + classeMarcaP);
    marcaP.classList.remove("sumir");
}

function opcaoBebida(classeBebida, classeMarcaB) {
    const borda = document.querySelector(".borda");
    if (borda !== null) {
        borda.classList.remove("borda");
    }
    const bebida = document.querySelector("." + classeBebida);
    bebida.classList.add("borda");

    var sumir = document.querySelector(".marcador");
    if (sumir.classList.contains("sumir") !== false) {
        sumir.classList.add("sumir");
    }
    const marcaB = document.querySelector("." + classeMarcaB);
    marcaB.classList.remove("sumir");
}