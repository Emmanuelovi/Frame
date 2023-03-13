const darkModeBtn1 = document.querySelector('#darkModeBtn')
const darkModeArea = document.querySelector('#darkModeArea')
const body = document.querySelector('body');
const menu = document.querySelector("#menu")
const encabezado = document.querySelector('header');
darkModeBtn1.addEventListener('click', () => {
    if(darkModeArea.classList[0]=="dark_mode--slide_area"){
        //cambia los estilos de la barra
        darkModeArea.classList.remove('dark_mode--slide_area')
        darkModeArea.classList.add('light_mode--slide_area')
        // cambia los estilos del boton
        darkModeBtn1.classList.remove('dark_mode--btn')
        darkModeBtn1.classList.add('light_mode--btn')
        // Aplica Modo oscuro al body
        body.classList.toggle('dark-mode');
        // Aplica Modo oscuro al header
        encabezado.classList.toggle('dark-mode');
    }else{
        //cambia los estilos de la barra
        darkModeArea.classList.remove('light_mode--slide_area')
        darkModeArea.classList.add('dark_mode--slide_area')
        // cambia los estilos del boton
        darkModeBtn1.classList.remove('light_mode--btn')
        darkModeBtn1.classList.add('dark_mode--btn')
        // Quita Modo oscuro al body
        body.classList.toggle('dark-mode');
        // Quita Modo oscuro al Header
        encabezado.classList.toggle('dark-mode');
    }
})

/** modificaciones bkackhan */
const openMenu = () => {
    menu.attributes.getNamedItem("status").value="open"
    menu.style.height="190px"
}

const closeMenu = () => {
    menu.attributes.getNamedItem("status").value="closed"
    menu.style.height="0px"
}
// ? Hace que el menu se muestre o se oculte en las pantallas de telefono
document.querySelector("#menu_btn").addEventListener('click',()=>{
    let status = menu.attributes.getNamedItem("status").value
    if(status=="closed"){
        openMenu()
    }else{
        closeMenu()
    }
})


