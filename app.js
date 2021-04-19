

const main = document.querySelector(".main");
const image = document.querySelector("#image");
const text = document.querySelector("#text");
const switchThemeButton = document.querySelector("#switchTheme");
const closeImg = document.querySelector("#closeImg");
const closeText = document.querySelector("#closeText");
const imageEdit = document.querySelector(".imageEdit");
const textEdit = document.querySelector(".textEdit");
const divImg = document.querySelector(".imgMeme");
const inputUrl = document.querySelector("#url");
const backgroundColor = document.querySelector("#backgroundColor");
const backgroundColorNumber = document.querySelector(".backgroundColorNumber");
const backgroundOptions = document.querySelector("#backgroundOptions");
const brightness = document.querySelector("#brightness");
const opacity = document.querySelector("#opacity");
const contrast = document.querySelector("#contrast");
const blur_ = document.querySelector("#blur");
const grayscale = document.querySelector("#grayscale");
const sepia = document.querySelector("#sepia");
const hue = document.querySelector("#hue");
const saturation = document.querySelector("#saturation");
const negative = document.querySelector("#negative");
const resetFilters = document.querySelector(".resetFilters");

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

// Edicion imagen

// Agrego imagen
inputUrl.addEventListener("keyup",()=>{
    const url = inputUrl.value;
    divImg.style.backgroundImage = `url(${url})`;
});

// Cambio color de fondo
backgroundColor.addEventListener("input",()=>{
    const color = backgroundColor.value;
    divImg.style.backgroundColor = color;
    backgroundColorNumber.textContent = color;
});

// Blend Mode
backgroundOptions.addEventListener('change', (event) => {
    divImg.style.backgroundBlendMode = event.target.value;
});

// Filtros
const actualizarFiltros = ()=>{
    divImg.style.filter = `brightness(${brightness.value}) 
    opacity(${opacity.value}) contrast(${contrast.value}%) 
    blur(${blur_.value}px) grayscale(${grayscale.value}%) 
    sepia(${sepia.value}%) hue-rotate(${hue.value}deg) 
    saturate(${saturation.value}%) invert(${negative.value})`;
}
brightness.addEventListener("change", actualizarFiltros);
opacity.addEventListener("change", actualizarFiltros);
contrast.addEventListener("change", actualizarFiltros);
blur_.addEventListener("change", actualizarFiltros);
grayscale.addEventListener("change", actualizarFiltros);
sepia.addEventListener("change", actualizarFiltros);
hue.addEventListener("change", actualizarFiltros);
saturation.addEventListener("change", actualizarFiltros);
negative.addEventListener("change", actualizarFiltros);

// Reestablecer filtros

resetFilters.addEventListener("click", () => {
    brightness.value = "1";
    opacity.value = "1";
    contrast.value = "1000";
    blur_.value = "0";
    grayscale.value = "0";
    sepia.value = "0";
    hue.value = "0";
    saturation.value = "100";
    negative.value = "0";
    actualizarFiltros();
});










