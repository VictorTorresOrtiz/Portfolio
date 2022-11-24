"use strict";
function validarForm(){

    

    //Validar Nombre
    if (document.fvalida.name.value.length==0){ //Comprobar si esta vacio
           alert("Tiene que escribir su nombre")
           document.fvalida.name.focus()
           return false;
    }  

    if (document.fvalida.name.value.length < 4){ //Comprobar si esta vacio
        alert("El nombre no puede contener menos de 4 caracteres")
        document.fvalida.name.focus()
        return false;
    }  

    //Validar EMAIL
    if (document.fvalida.email.value.length==0){
        alert("Tiene que escribir su Email")
        document.fvalida.email.focus()
        return false;

    }

    if (document.fvalida.email.value == "/^\w+([\.-]?\w+)*\w+([\.-]?\w+)*(\.\w{2,3,4})+$/"){
        alert("Correo invalido")
        document.fvalida.email.focus()
        return false;

    } 
    //Validar EMAIL



    //Validar Contacto
     if (document.fvalida.contact.value.length==0){
        alert("Tiene que escribir su Contacto")
        document.fvalida.contact.focus()
        return false;
    }
    

    if (document.fvalida.contact.value.length < 4){
        alert("El contacto debe tener más de 4 caracteres ")
        document.fvalida.contact.focus()
        return false;
    }
    //Validar Contacto

    //Validar Mensaje
    if (document.fvalida.message.value.length==0){
        alert("Tiene que escribir su Mensaje")
        document.fvalida.message.focus()
        return false;

    }

    if (document.fvalida.contact.value.length < 4){
        alert("El mensaje debe tener más de 4 caracteres ")
        document.fvalida.contact.focus()
        return false;

    }
    //Validar Mensaje
}
