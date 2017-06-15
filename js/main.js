var cargarPagina= function(){
  mostrarTemas();
  cargarFormulario();
}

var mostrarTemas = function (){
  
}
var cargarFormulario=function (){
  var formCrearTema=$("#formCrearTema")
  formCrearTema.hide();
  $("#crearTema").on("click",function(){
  formCrearTema.show();
  });
};



$(document).ready(cargarPagina);
