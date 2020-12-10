(function(){
    "use strict";
    //regalo
    var regalo = document.getElementById("regalo");
    
    
    document.addEventListener('DOMContentLoaded', function(){

    console.log("Document ready");
    
    //Campos Datos usuario
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    
    // Campos pases
    var pase_dia = document.getElementById("pase_dia");
    var pase_dosdias = document.getElementById("pase_dosdias");
    var pase_completo = document.getElementById("pase_completo");

    //Botones y Divs
    var calcular = document.getElementById("calcular");
    var errorNombre = document.getElementById("error_nombre");
    var errorApellido = document.getElementById("error_apellido");
    var errorEmail = document.getElementById("error_email");
    var botonRegistro = document.getElementById("btnRegistro");
    var resumenProductos = document.getElementById("lista-productos");
    var suma = document.getElementById("suma-total");
    
    //Extras
    var etiquetas = document.getElementById("etiquetas");
    var camisas = document.getElementById("camisa_evento");

    //Escuchadores de eventos de los pases
    pase_dia.addEventListener("blur", mostrarDias);
    pase_dosdias.addEventListener("blur", mostrarDias);
    pase_completo.addEventListener("blur", mostrarDias); 

    //Escuchador de eventos del boton calcular
    calcular.addEventListener('click', calcularMonto);
    
    // Escucador de eventos de campos de usuario
    nombre.addEventListener("blur", verificarNombre);
    apellido.addEventListener("blur", verificarApellido);
    email.addEventListener("blur", verificarEmail);
    email.addEventListener("blur", validarEmail);

    function validarEmail()
    {
    
        if(this.value.indexOf("@") > -1)
        {
            errorEmail.style.display = "none";
        }
        else
        {
            errorEmail.style.display = "block";
            errorEmail.innerHTML = "*Escribe un correo valido";
        }       
    }
    
    function verificarNombre()
    {   
        if(this.value == "")
        {
            errorNombre.style.display = "block";
            errorNombre.innerHTML = "*Este campo es obligatorio";
        }
        else
        {
            errorNombre.style.display = "none";
        }
    }
    function verificarApellido()
    {   
        if(this.value == "")
        {
            errorApellido.style.display = "block";
            errorApellido.innerHTML = "*Este campo es obligatorio";
        }
        else
        {
            errorApellido.style.display = "none";
        }
    }
    function verificarEmail()
    {   
        if(this.value == "")
        {
            errorEmail.style.display = "block";
            errorEmail.innerHTML = "*Este campo es obligatorio";
        }
        else
        {
            errorEmail.style.display = "none";
        }
    }
    function calcularMonto(event)
    {
        event.preventDefault();
        console.log("Has hecho click en calcular");
        if(regalo.value === "")
        {
            alert("Debes elegir un regalo >:v");
            regalo.focus();
        }
        else
        {
            var boletosDia = parseInt(pase_dia.value, 10);
            var boletos2Dias = parseInt(pase_dosdias.value, 10);
            var boletosCompleto = parseInt(pase_completo.value, 10);
            var cantCamisas = parseInt(camisas.value, 10);
            var cantEtiquetas = parseInt(etiquetas.value, 10);
            

            var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletosCompleto * 50) + ((cantCamisas * 10)* .93) + (cantEtiquetas*2);
            console.log(totalPagar);
        
            var listaProductos = [];

            if(boletosDia > 0)
            {    
                listaProductos.push("Pases por día: " + boletosDia);
            }
            
            if(boletos2Dias > 0) 
            {
                listaProductos.push("Pases por dos días: " + boletos2Dias);
            }
            if(boletosCompleto > 0)
            {
                listaProductos.push("Pases completos: " + boletosCompleto);
            }
            console.log(listaProductos);
            if(cantCamisas > 0)
            {
                listaProductos.push("Camisas: "+ cantCamisas);
            }
            if(cantEtiquetas > 0)
            {
                listaProductos.push("paquete de etiquetas: " + cantEtiquetas);
            }
            var resultado;
            resumenProductos.style.display = "block"
            suma.style.display = "block";
            resumenProductos.innerHTML = "";
            for(var i = 0; i < listaProductos.length; i++)
            {
                // Innerhtml inserta los elementos
                resumenProductos.innerHTML += listaProductos[i] + "<br/>"; 

            }
            suma.innerHTML = "$" + totalPagar.toFixed(2);
        }
        
    }
    function mostrarDias()
    {
        var boletosDia = parseInt(pase_dia.value, 10);
        var boletos2Dias = parseInt(pase_dosdias.value, 10);
        var boletosCompleto = parseInt(pase_completo.value, 10);
        
        document.getElementById("viernes").style.display = "none";
        document.getElementById("sabado").style.display = "none";
        document.getElementById("domingo").style.display = "none";

        if (boletosDia > 0)
        {
            document.getElementById("viernes").style.display = "block";
        }
        if (boletos2Dias > 0)
        {
            document.getElementById("viernes").style.display = "block";
            document.getElementById("sabado").style.display = "block";
        }
        if (boletosCompleto > 0)
        {
            document.getElementById("viernes").style.display = "block";
            document.getElementById("sabado").style.display = "block";
            document.getElementById("domingo").style.display = "block";
        }
    }
}); 
})();
$(function(){
    
    //programa de conferencias
    $(".menu-programa a").on("click",enlaceOprimido);
    $(".programa-evento .info-curso:first").show();
    
    $(".menu-programa a:first").addClass("activo");
    
    
    function enlaceOprimido(){
        
        $("div.ocultar").hide();
        var enlace = $(this).attr("href");
        
        $(".menu-programa a").removeClass("activo");
        $(this).addClass("activo");
        
        //ANIMACION FADEIN
        $(enlace).fadeIn(1000);
        
        //Evita que en el evento se ejecute una accion 
        return false;
    }
    //Animacion para numeros 
    $(".resumen-evento li:nth-child(1) p").animateNumber({number: 6}, 1200);
    $(".resumen-evento li:nth-child(2) p").animateNumber({number: 15}, 1200);
    $(".resumen-evento li:nth-child(3) p").animateNumber({number: 3}, 1200);
    $(".resumen-evento li:nth-child(4) p").animateNumber({number: 9}, 1200);
    $(".resumen-evento").on("mouseleave",animarNumeros);
    
    console.log($(".resumen-evento"));
    
    function animarNumeros()
    {
        console.log("numeros");
        $(".resumen-evento li:nth-child(1) p").animateNumber({number: 6}, 1200);
        $(".resumen-evento li:nth-child(2) p").animateNumber({number: 15}, 1200);
        $(".resumen-evento li:nth-child(3) p").animateNumber({number: 3}, 1200);
        $(".resumen-evento li:nth-child(4) p").animateNumber({number: 9}, 1200);
        
        return false;
    }
    //Cuenta regresiva
    
    $(".cuenta-regresiva").countdown("2020/08/24 04:50:00",cuentaRegresiva)
    
    function cuentaRegresiva(event)
    {
        $("#dias").html(event.strftime("%D"));
        $("#horas").html(event.strftime("%H"));
        $("#minutos").html(event.strftime("%M"));
        $("#segundos").html(event.strftime("%S"));
    }
    //lettering
    
    $(".nombre-sitio").lettering();

    //menu fijo
    
    //Detectando el scroll
    $(window).scroll(function()
    {
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
     
        console.log(windowHeight); 
        
        var alturaBarra = $(".barra").innerHeight();
        console.log(alturaBarra);

        //console.log(parseInt(scroll));
        
        if(scroll > windowHeight)
        {
            $("div.barra").addClass("fixed");
            $("body").css({"margin-top":"96px"});
        }
        else
        {
            $("div.barra").removeClass("fixed");
            $("body").css({"margin-top": "0px"});
        }

    });
    //Menu responsivo

    $("div.menu-movil").on("click", mostrarMenu);
    function mostrarMenu()
    {
        $("nav.navegacion-principal").slideToggle(1000);
    }
    

});