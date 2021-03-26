

const main = document.querySelector(".main");
const image = document.querySelector(".image");
const text = document.querySelector(".text");
const darkOrLight = document.querySelector(".darkOrLight");
const closeImg = document.querySelector("#closeImg");
const closeText = document.querySelector("#closeText");
const imageEdit = document.querySelector(".imageEdit");
const textEdit = document.querySelector(".textEdit");

// Abrir y cerrar paneles
const abrirPanelImagen = () => {
    imageEdit.classList.remove("displayNone");
    main.classList.add("displayNone");
    textEdit.classList.add("displayNone");
}
image.addEventListener("click", abrirPanelImagen);

const abrirPanelTexto = () => {
    textEdit.classList.remove("displayNone");
    main.classList.add("displayNone");
    imageEdit.classList.add("displayNone");
}
text.addEventListener("click", abrirPanelTexto);

const cerrarPanel = () => {
    textEdit.classList.add("displayNone");
    main.classList.remove("displayNone");
    imageEdit.classList.add("displayNone");
}
closeImg.addEventListener("click", cerrarPanel);
closeText.addEventListener("click", cerrarPanel);



