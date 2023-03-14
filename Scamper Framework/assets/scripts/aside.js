(function(){
    var aside = document.getElementById("sidebar"),
    boton = document.getElementById("button_side"),
    elementos = document.getElementsByClassName("txtOpc"),
<<<<<<< Updated upstream
    lista = document.querySelectorAll(".sidebar ul li");
    const icono = document.getElementById('logo_nombre');

=======
    lista = document.querySelectorAll(".sidebar ul li")
    principal = document.querySelector("main");
    const icono = document.getElementById('logo_nombre');
    principal.addEventListener("click", comprimir);
    
>>>>>>> Stashed changes
    for(var i =0; i < elementos.length; i++){
        elementos[i].setAttribute("title",elementos[i].innerHTML);
        elementos[i].classList.add("Abierto","oculto");
        lista[i].style.width = "60%";
    }

    boton.addEventListener("click",extender);
<<<<<<< Updated upstream
=======
    function comprimir(){
        if(aside.classList.contains("animacion")){
            aside.classList.toggle("animacion");
            aside.classList.toggle("sidebar_ext");
            icono.classList.toggle('reubicar');
            
            if(!aside.classList.contains("animacion")){
                aside.classList.add("animacion_dis");
            }else{
                aside.classList.remove("animacion_dis");
            }
            for(var i =0; i < elementos.length; i++){
                elementos[i].classList.toggle("oculto");
                if(lista[i].getAttribute("Style")=="width: 60%;"){
                    lista[i].style.width = "90%";
                }else{
                    lista[i].style.width = "60%";
                }
            }
        }
    }
>>>>>>> Stashed changes
    function extender(){
        aside.classList.toggle("animacion");
        aside.classList.toggle("sidebar_ext");
        icono.classList.toggle('reubicar');
        
        if(!aside.classList.contains("animacion")){
            aside.classList.add("animacion_dis");
        }else{
            aside.classList.remove("animacion_dis");
        }
        for(var i =0; i < elementos.length; i++){
            elementos[i].classList.toggle("oculto");
            if(lista[i].getAttribute("Style")=="width: 60%;"){
                lista[i].style.width = "90%";
            }else{
                lista[i].style.width = "60%";
            }
        }
    }
})();