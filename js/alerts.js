 
"use strict";  
//Alerts cierre automatico
  window.setTimeout(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove(); 
    });
	}, 2000); //Segudos
