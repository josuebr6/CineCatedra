function validarForm(){


   //alert("validando");//
   var verificar= true;
   var expRegNombre=/^[a-zA-ZÑñÁáÉéÍiÓóÚú\s]+$/;
   var expRegEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

   var formulario=document.getElementById("contacto-frm");
   var nombre=document.getElementById("nombre");
   var apellido=document.getElementById("apellido");
   var email=document.getElementById("email");
   var comentarios=document.getElementById("comentarios");


   if(!nombre.value){
      
      nombre.focus();
      verificar= false;
   }

   else if(!expRegNombre.exec(nombre.value)){
      
      nombre.focus();
      verificar=false;
   }

   else if(!apellido.value){
      
      apellido.focus();
      verificar=false;
   }

   else if(!email.value){
      email.focus();
      verificar=false;
   }

   else if(!expRegEmail.exec(email.value)){
      
      email.focus();
      verificar=false;
   }

   else if(!comentarios.value){
      
      comentarios.focus();
      verificar=false;
   }

   else if(comentarios.value.lenght > 255){
      //alert("el campo comentario no puede tener mas de 255 caracteres");
      comentarios.focus();
      verificar=false;
   }

   if(verificar){
       alert("Se ha enviado el formulario");
   document.contacto_frm.submit();
   }
    
}

function limpiarForm(){
   alert("Limpiando");
   document.getElementById("contacto-frm").reset();
}

window.onload =function(){
   var botonEnviar, botonLimpiar;
   botonLimpiar=document.getElementById("limpiar");
   botonLimpiar.onclick=limpiarForm;

   botonEnviar=document.contacto_frm.enviar_btn;
   botonEnviar=onclick=validarForm;
}