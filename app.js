

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

// Modo oscuro

const toggleSwitch = document.querySelector("#toggle");

function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
        darkOrLight.innerHTML = "Modo claro";
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
        darkOrLight.innerHTML = "Modo oscuro";
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

if (document.documentElement.getAttribute("data-theme") == "dark"){
    toggleSwitch.checked = true;
}



