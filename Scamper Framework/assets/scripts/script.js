const body = document.querySelector('body');
const sidebar = document.getElementById('sidebar');
const icono = document.getElementById('button_side');
const encabezado = document.querySelector('header');
const darkModeBtn1 = document.querySelector('#darkModeBtn')
const darkModeArea = document.querySelector('#darkModeArea')

darkModeArea.addEventListener('click', () => {
    if(darkModeArea.classList[0]=="dark_mode--slide_area"){
        //cambia los estilos de la barra
        darkModeArea.classList.remove('dark_mode--slide_area')
        darkModeArea.classList.add('light_mode--slide_area')
        // cambia los estilos del boton
        darkModeBtn1.classList.remove('dark_mode--btn')
        darkModeBtn1.classList.add('light_mode--btn')
        // Aplica el modo Oscuro
        body.classList.toggle('dark-mode');
        encabezado.classList.toggle('dark-mode'); 
        if(sidebar != undefined)
        {
            sidebar.classList.toggle('dark-mode');
            icono.classList.toggle('dark-mode');
        }
              
    }else{
        //cambia los estilos de la barra
        darkModeArea.classList.remove('light_mode--slide_area')
        darkModeArea.classList.add('dark_mode--slide_area')
        // cambia los estilos del boton
        darkModeBtn1.classList.remove('light_mode--btn')
        darkModeBtn1.classList.add('dark_mode--btn')
        // Quita el Modo oscuro
        body.classList.toggle('dark-mode');
        encabezado.classList.toggle('dark-mode');
        if(sidebar != undefined)
        {
            sidebar.classList.toggle('dark-mode');
            icono.classList.toggle('dark-mode');
        }
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
    }
})


<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
