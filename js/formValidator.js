   
function validarForm(){

    

    //Validar Nombre
    if (document.fvalida.name.value.length==0){ //Comprobar si esta vacio
           alert("Tiene que escribir su nombre")
           document.fvalida.name.focus()
           return false;

    }  

    //Validar EMAIL
    if (document.fvalida.email.value.length==0){
        alert("Tiene que escribir su Email")
        document.fvalida.email.focus()
        return false;

    }

     //Validar Contacto
     if (document.fvalida.contact.value.length==0){
        alert("Tiene que escribir su Contacto")
        document.fvalida.contact.focus()
        return false;

    }

    //Validar Mensaje
    if (document.fvalida.message.value.length==0){
        alert("Tiene que escribir su Mensaje")
        document.fvalida.message.focus()
        return false;

    }
}
