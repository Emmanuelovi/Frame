(function(){
    var btn1_mod =document.getElementById("btn1_mod"),
    btn2_mod=document.getElementById("btn2_mod"),
    btn3_mod=document.getElementById("btn3_mod"),
    Boton_Modulo_1=document.getElementById("Boton_Modulo_1"),
    Boton_Modulo_2=document.getElementById("Boton_Modulo_2"),
    Boton_Modulo_3=document.getElementById("Boton_Modulo_3"),
     modAlert1 = document.getElementById("modAlert1"),
     modAlert2 = document.getElementById("modAlert2"),
     modAlert3 = document.getElementById("modAlert3"),
     showBtn1 = document.getElementById("showBtn1");

     function Show1(){
        modAlert1.classList.remove("oculto_mod");

     }
     function Show2(){
      modAlert2.classList.remove("oculto_mod");

   }
   function Show3(){
      modAlert3.classList.remove("oculto_mod");

   }
     function Hide1(){
        modAlert1.classList.add("oculto_mod");
     }
     function Hide2(){
      modAlert2.classList.add("oculto_mod");
   }
   function Hide3(){
      modAlert3.classList.add("oculto_mod");
   }

     //sho.addEventListener("click",Show1);
     btn1_mod.addEventListener("click",Hide1);
     btn2_mod.addEventListener("click",Hide2);
     btn3_mod.addEventListener("click",Hide3);
     Boton_Modulo_1.addEventListener("click",Show1);
     Boton_Modulo_2.addEventListener("click",Show2);
     Boton_Modulo_3.addEventListener("click",Show3);
})();