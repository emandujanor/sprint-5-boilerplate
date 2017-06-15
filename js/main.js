var api = {
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics/'
};
var contadorTemas = 0;
var cargarPagina = function() {
  cargarFormulario();
  cargarTemas(); //
}

var cargarTemas = function() {
  $.getJSON(api.url, function(response) {
    response.forEach(mostrarTemas);
  });
}
var mostrarTemas = function(tema) {
  var contenido = tema.content;
  var autor = tema.author_name;
  var id = tema.id;
  var respuestas = tema.responses_count;
  contadorTemas += 1;

  //console.log("nombre: "+ autor+ "id: " + id);

  // creamos la fila
  var $tr = $("<tr class='tema_fila'></tr>");
  // creamos la celda del tema
  var $contenidoTd = $("<td />");
  $contenidoTd.text(contenido);
  // creamos la celda del autor
  var $nombreTd = $("<td />");
  $nombreTd.text(autor);
  // creamos la celda del respuestas
  var $respuestasTd = $("<td />");
  $respuestasTd.text(respuestas);

  // agregamos las celdas a la fila
  $tr.append($contenidoTd);
  $tr.append($nombreTd);
  $tr.append($respuestasTd);
  // agregamos filas a la tabla
  var $tabla = $("#lista-temas");
  $tabla.append($tr);

};



var cargarFormulario = function() {
  var formCrearTema = $("#formCrearTema");
  formCrearTema.hide();
  $("#crearTema").on("click", function() {
    formCrearTema.show();
  });
  var $botonCrearTema = $("#nuevoTema");
  $botonCrearTema.click(agregarTema);
};


var agregarTema = function(e) {
  e.preventDefault();
  var tema = $("#tema").val();
  var autor = $("#autor").val();
  var idTemaNuevo = contadorTemas + 1;
  $.post(api.url, {
    "id": idTemaNuevo,
    "author_name": autor,
    "content": tema
  }, function(tema) {
    mostrarTemas(tema);
    $("#formCrearTema").hide();
  });
};



$(document).ready(cargarPagina);
