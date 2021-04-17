

const main = document.querySelector(".main");
const image = document.querySelector("#image");
const text = document.querySelector("#text");
const switchThemeButton = document.querySelector("#switchTheme");
const closeImg = document.querySelector("#closeImg");
const closeText = document.querySelector("#closeText");
const imageEdit = document.querySelector(".imageEdit");
const textEdit = document.querySelector(".textEdit");

// Abrir y cerrar paneles

const abrirPanelImagen = () => {
    imageEdit.classList.add("zIndex1");
    imageEdit.classList.toggle("displayNone");
    main.classList.remove("zIndex1");
    textEdit.classList.toggle("displayNone");
    textEdit.classList.remove("zIndex1");
}
image.addEventListener("click", abrirPanelImagen);

const abrirPanelTexto = () => {
    textEdit.classList.add("zIndex1");
    textEdit.classList.toggle("displayNone");
    main.classList.remove("zIndex1");
    imageEdit.classList.toggle("displayNone");
    imageEdit.classList.remove("zIndex1");
}
text.addEventListener("click", abrirPanelTexto);

const cerrarPanel = () => {
    main.classList.add("zIndex1");
    textEdit.classList.remove("zIndex1");
    imageEdit.classList.remove("zIndex1");
    textEdit.classList.toggle("displayNone");
    imageEdit.classList.toggle("displayNone");
}
closeImg.addEventListener("click", cerrarPanel);
closeText.addEventListener("click", cerrarPanel);



// Modo oscuro

function switchTheme(e) {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    switchThemeButton.innerHTML = `<i class="fa fa-lightbulb-o" aria-hidden="true"></i> Modo oscuro`;

    if(currentTheme ==  "light" ||  currentTheme == undefined){
        targetTheme = "dark"
        switchThemeButton.innerHTML = `<i class="fa fa-lightbulb-o" aria-hidden="true"></i> Modo claro`;
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    }
    switchThemeButton.addEventListener('click', switchTheme);

