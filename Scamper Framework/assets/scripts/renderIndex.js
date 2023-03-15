const inicioContent = `
<div class="container">

<div class="bloque">
    <div class="tarjeta resaltar">
        <div class="imagen">
            <img src="assets/icons/mision.svg">
        </div>
        <div class="texto">
            <h2>Misión</h2>
            <p>Desarrollar y ofrecer productos de software que satisfagan las necesidades del cliente de una manera innovadora, funcional y responsable.</p>
        </div>
    </div>

    <div class="tarjeta resaltar">
        <div class="imagen">
            <img src="assets/icons/vision.svg">
        </div>
        <div class="texto">
            <h2>Visión</h2>
            <p>Ser una empresa de desarrollo de software auténtica, distintiva y confiable, ofreciendo los mejores productos que inspiren y contribuyan a solucionar problemas. </p>
        </div>
    </div>

    <div class="tarjeta resaltar">
        <div class="imagen">
            <img src="assets/icons/valores.svg">
        </div>
        <div class="texto">
            <h2>Valores</h2>
            <ul>
                <li>Innovación</li>
                <li>Calidad</li>
                <li>Trabajo en equipo</li>
                <li>Compromiso</li>
                <li>Mejora</li>
            </ul>
        </div>
    </div>

</div>

<div class="bloque ajuste">
    <div class="tarjeta resaltar">
        <div class="imagen">
            <img src="assets/icons/tematica.svg">
        </div>
        <div class="texto">
            <h2>Temática</h2>
            <p>Diseño elegante, minimalista y profesional con un aspecto limpio; por ello, se utiliza una paleta de colores sencilla, una tipografía sobria, pocos elementos e iconos que destaquen entre sí.</p>
        </div>
    </div>

    <div class="tarjeta resaltar">
        <div class="imagen">
            <img src="assets/icons/publico.svg">
        </div>
        <div class="texto">
            <h2>Público objetivo</h2>
            <p>Desarrolladores que requieran de herramientas e ideas para codificar y diseñar sitios web; incluso personas sin experiencia para obtener ideas y aprender a codificar.</p>
        </div>
    </div>

</div>


</div>
`

const renderInicio = () => {
    var sidebar = document.getElementById("sidebar")
    var logo = document.getElementById("logo");
    const icono = document.getElementById('logo_nombre');
    // Validar que el logo del nombre se ubique segun sea
    if(icono.classList.contains("reubicar"))
    {
        icono.classList.remove("reubicar");
    }
    // Mostrar el logo cuando estamos en la pagina de inicio
    if(logo.classList.contains("oculto"))
    {
        logo.classList.remove("oculto");   
    }
    // Quitar el sidebar cuando estamos en la pagina de inicio
    if(!sidebar.classList.contains("oculto"))
    {
        sidebar.classList.add("oculto");
    }
    closeMenu()
    document.querySelector("#myApp").innerHTML=inicioContent
}