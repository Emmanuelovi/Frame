const indexContent = `
<div class="container">
<div class="container">
    <section class="introduccion">
        <h2 class="titulos">Introducción</h2>
        <article>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero excepturi impedit, ea blanditiis provident eligendi nisi minima enim dignissimos corrupti accusamus reprehenderit eveniet iusto natus quibusdam distinctio magni voluptate.</p>
            <p>Ea ullam iure nemo rem deleniti. Animi libero dicta quis quas quae magni beatae, placeat obcaecati explicabo, itaque ducimus perspiciatis laudantium necessitatibus ea minus modi rem non sunt. Soluta, ipsa!</p>
            <p>Nulla corrupti officiis laboriosam laborum nemo soluta esse aliquam. Sed voluptatum nobis expedita placeat a odit necessitatibus veniam consequatur, quis eligendi facilis, laudantium fugiat voluptate fugit, dicta veritatis ipsam quisquam!</p>
        </article>
    </section>

    <section class="requerimientos">
        <h2 class="titulos">Requerimientos</h2>
        <article>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero excepturi impedit, ea blanditiis provident eligendi nisi minima enim dignissimos corrupti accusamus reprehenderit eveniet iusto natus quibusdam distinctio magni voluptate.</p>
            <p>Ea ullam iure nemo rem deleniti. Animi libero dicta quis quas quae magni beatae, placeat obcaecati explicabo, itaque ducimus perspiciatis laudantium necessitatibus ea minus modi rem non sunt. Soluta, ipsa!</p>
            <p>Nulla corrupti officiis laboriosam laborum nemo soluta esse aliquam. Sed voluptatum nobis expedita placeat a odit necessitatibus veniam consequatur, quis eligendi facilis, laudantium fugiat voluptate fugit, dicta veritatis ipsam quisquam!</p>
        </article>
    </section>

    <section class="encabezados">
        <h2 class="titulos">Encabezados</h2>
        <article>
            <h1>Titulo 1</h1>
            <h2>Titulo 2</h2>
            <h3>Titulo 3</h3>
            <h4>Titulo 4</h4>
            <h5>Titulo 5</h5>
            <h6>Titulo 6</h6>
        </article>
    </section>

    <section class="tipografia">
        <h2 class="titulos">Tipografía</h2>
        <article>
            <p id="titles">Robotomono - Regular para títulos y subtítulos.</p>
            <p id="texts">Poppins - Regular para textos generales.</p>
            <p id="buttons">Inconsolata - Regular para botones.</p>
        </article>
    </section>

    <section class="paleta">
        <h2 class="titulos">Paleta de colores</h2>
        <article>

        </article>
    </section>

    <section class="botones">
        <h2 class="titulos">Botones</h2>
        <article>

        </article>
    </section>
    
    <section class="header-footer">
        <h2 class="titulos">Header y footer</h2>
        <article>

        </article>
    </section>

    <section class="menu">
        <h2 class="titulos">Menú lateral</h2>
        <article>
            
        </article>
    </section>

    <section class="formulario">
        <h2 class="titulos">Formularios</h2>
        <article>
            
        </article>
    </section>

    <section id="modulos_flotantes">
        <h2 class="titulos">Modales</h2>
        <!-- Botones para aparecer-->
        <!-- Estilos = style_modales && style_modales_fonts-->
        <!--scripts = script_modal-->
        <div class="float_mod">
        <span class="Modulos_flot" id="Boton_Modulo_1">Modulo Flotante 1 (Central)</span>
        <span class=" Modulos_flot" id="Boton_Modulo_2">Modulo Flotante 2 (Superior)</span>
        <span class=" Modulos_flot" id="Boton_Modulo_3">Modulo Flotante 3 (Inferior)</span>
        </div>
        
        <!-- Modulos-->
        <mod_uno class="oculto_mod" id="modAlert1">
            <div class="pant_gral_mod">
                <div class="cuadro1_mod">
                    <span class="btn1_mod icon-cross" id="btn1_mod"></span>
                    <p class="p_mod_1">Pon tu texto aquí</p>
                </div>
            </div>
        </mod_uno>
    
        <mod_dos class="oculto_mod" id="modAlert2">
            <div class="pant_gral_mod">
                <div class="cuadro2_mod">
                    <span class="btn2_mod icon-cross" id="btn2_mod"></span>
                    <p class="p_mod_2">Pon tu texto aquí</p>
                </div>
            </div>
        </mod_dos>
    
        <mod_tres class="oculto_mod" id="modAlert3">
            <div class="pant_gral_mod">
                <div class="cuadro3_mod">
                    <span class="btn3_mod icon-checkmark" id="btn3_mod"></span>
                    <p class="p_mod_3"> ¡¡¡ PON TU TEXTO AQUI !!!   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aliquam vel beatae unde aut consequatur ullam illum qui magnam, voluptate obcaecati amet dolor a? Necessitatibus asperiores eos doloremque tempora ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius iste quia quaerat quod perferendis vitae officiis fugiat, possimus aliquam voluptas minus facilis praesentium, soluta dicta quas atque ducimus nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestiae optio eum dolorum tempora sit neque obcaecati, doloremque qui sequi. Autem nam sed consequuntur velit laborum vero, reprehenderit incidunt exercitationem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem doloremque ratione, quaerat laudantium tempora odit commodi aliquid vel itaque modi est amet ab officia nemo dolores accusantium harum explicabo? Exercitationem.
                    </p>
                </div>
            </div>
        </mod_tres>
    </section>

    <section class="iconos">
        <h2 class="titulos">Iconos</h2>
        <article>
            
        </article>
    </section>
    
</div>


</div>
`

const renderIndex = () => {
    var sidebar = document.getElementById("sidebar")
    var logo = document.getElementById("logo");
    if(!logo.classList.contains("oculto"))
    {
        logo.classList.add("oculto");   
    }


    if(sidebar.classList.contains("oculto"))
    {
        sidebar.classList.remove("oculto");
        if(sidebar.classList.contains("animacion_dis")){
            sidebar.classList.remove("animacion_dis");
        }
    }
	closeMenu()
	document.querySelector("#myApp").innerHTML=indexContent
}