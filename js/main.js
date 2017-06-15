var api = {
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics/'
};
var cargarPagina= function(){
  mostrarTemas();
  cargarFormulario();
  cargarTemas();
}

var cargarTemas = function () {
  $.getJSON(api.url, function (response) {
    response.forEach(crearTemas);
  });
}
var crearTemas= function(tema){
  var contenido= tema.content;
  var autor= tema.author_name;
  var id= tema.id;
  var respuestas= tema.responses_count;
  console.log("nombre: "+ autor+ "id: " + id);

  // creamos la fila
  var $tr = $("<tr />");
  // creamos la celda del tema
  var $contenidoTd = $("<td />");
  $contenidoTd.text(contenido);
  // creamos la celda del autor
  var $nombreTd = $("<td />");
  $nombreTd.text(autor);
  // creamos la celda del respuestas
  var $respuestasTd = $("<td />");
  $respuestasTd .text(respuestas);

  // agregamos las celdas a la fila
  $tr.append($contenidoTd);
  $tr.append($nombreTd);
  $tr.append($respuestasTd);
  // agregamos filas a la tabla
  var $tabla= $("#lista-temas");
  $tabla.append($tr);

};

/*request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();*/






var crearTema = function (topics) {
  var nombre = topics.author_name;
  var tema = topics.content[0];
  var id= topics.id;
  var respuestas= topics.responses_count;
  console.log("nombre " +nombre);
  console.log("tema " +tema);
  console.log("id " + id);
  console.log("respuesta " +respuestas);

/*  // creamos la fila
  var $tr = $("<tr />");
  // creamos la celda del nombre
  var $nombreTd = $("<td />");
  $nombreTd.text(nombre);
  // creamos la celda del estado
  var $estadoTd = $("<td />");
  $estadoTd.text(estado);
  // agregamos las celdas a la fila
  $tr.append($nombreTd);
  $tr.append($estadoTd);
  // agregamos filas a la tabla
  $tasksList.append($tr);*/
};

var mostrarTemas = function (){
  console.log(api.url);
}
var cargarFormulario=function (){
  var formCrearTema=$("#formCrearTema")
  formCrearTema.hide();
  $("#crearTema").on("click",function(){
  formCrearTema.show();
  });
};



$(document).ready(cargarPagina);
