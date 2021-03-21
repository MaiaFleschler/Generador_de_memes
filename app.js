// Abrir y cerrar paneles

const main = document.querySelector(".main");
const image = document.querySelector(".image");
const text = document.querySelector(".text");
const closeImg = document.querySelector("#closeImg");
const closeText = document.querySelector("#closeText");
const imageEdit = document.querySelector(".imageEdit");
const textEdit = document.querySelector(".textEdit");

const abrirPanelImagen = () => {
    imageEdit.style =`display:block;`;
    main.style =`display:none;`;
    textEdit.style =`display:none;`;
}
image.addEventListener("click", abrirPanelImagen);

const abrirPanelTexto = () => {
    textEdit.style =`display:block;`;
    main.style =`display:none;`;
    imageEdit.style =`display:none;`;
}
text.addEventListener("click", abrirPanelTexto);

const cerrarPanel = () => {
    imageEdit.style =`display:none;`;
    main.style =`display:block;`;
    textEdit.style =`display:none;`;
}
closeImg.addEventListener("click", cerrarPanel);
closeText.addEventListener("click", cerrarPanel);