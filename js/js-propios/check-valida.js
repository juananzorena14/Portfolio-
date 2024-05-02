function check(){

    var s;
    var sended = document.getElementById("sended");
      if(sended.hasChildNodes()){
        sended.removeChild(sended.lastChild);
        sended.removeChild(sended.lastChild);
      }
      var contenido = document.createTextNode("");
      sended.appendChild(contenido);
    if($('input').hasClass("invalid") || document.fvalida.email.value=="Ingres\u00e1 tu email" || document.fvalida.email.value=="" || document.fvalida.tel.value=="Ingres\u00e1 tu tel\u00e9fono" || document.fvalida.tel.value=="" || document.fvalida.nombre.value=="Ingres\u00e1 tu nombre" || document.fvalida.nombre.value=="" || document.fvalida.msj.value=="Escrib\u00ed tu mensaje" || document.fvalida.msj.value==""){
    //  if($('input').hasClass("invalid") || document.fvalida.email.value=="" || document.fvalida.nombre.value=="" || document.fvalida.msj.value==""){
      
      s = document.getElementById('send');
        
        s.disabled = true;
        contenido = document.createTextNode("Por favor, complet\u00e1 todos los campos");
        sended.appendChild(contenido);
        return 0;
    }
    else {
        s = document.getElementById('send');
        s.disabled = false;
        contenido = document.createTextNode("Envi\u00e1 los datos");
        sended.appendChild(contenido);
        return 0;
    }
  }

  function valida_envia(){
      var sended = document.getElementById("sended");
      var tilde;
       if(sended.hasChildNodes()){
	   
        sended.removeChild(sended.lastChild);
        sended.removeChild(sended.lastChild);
      }
	
      contenido = document.createTextNode("Tu mensaje fue enviado correctamente");
	 
      sended.appendChild(contenido);

      tilde = document.createElement("img");
      tilde.src="img/check-white.png";
      sended.appendChild(tilde);
      var s;
      s = document.getElementById('send');
	  
      s.disabled = true;
      document.fvalida.submit();
      return 0;
  }