const body = document.querySelector('body');
const sidebar = document.getElementById('sidebar');
const icono = document.getElementById('logo');
const encabezado = document.querySelector('header');
const darkModeBtn1 = document.querySelector('#darkModeBtn')
const darkModeArea = document.querySelector('#darkModeArea')

darkModeBtn1.addEventListener('click', () => {
    if(darkModeArea.classList[0]=="dark_mode--slide_area"){
        //cambia los estilos de la barra
        darkModeArea.classList.remove('dark_mode--slide_area')
        darkModeArea.classList.add('light_mode--slide_area')
        // cambia los estilos del boton
        darkModeBtn1.classList.remove('dark_mode--btn')
        darkModeBtn1.classList.add('light_mode--btn')
        // Aplica el modo Oscuro
        body.classList.toggle('dark-mode');
        sidebar.classList.toggle('dark-mode');
        icono.classList.toggle('dark-mode');
        encabezado.classList.toggle('dark-mode');        
    }else{
        //cambia los estilos de la barra
        darkModeArea.classList.remove('light_mode--slide_area')
        darkModeArea.classList.add('dark_mode--slide_area')
        // cambia los estilos del boton
        darkModeBtn1.classList.remove('light_mode--btn')
        darkModeBtn1.classList.add('dark_mode--btn')
        // Quita el Modo oscuro
        body.classList.toggle('dark-mode');
        sidebar.classList.toggle('dark-mode');
        icono.classList.toggle('dark-mode');
        encabezado.classList.toggle('dark-mode');
    }
})



