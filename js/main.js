var api = {
  url: "http://examen-laboratoria-sprint-5.herokuapp.com/topics"
}
var $content = $("#tema_comentario");

var cargarPagina = function () {
  cargarTemas();
   $('.modal').modal();
};

var cargarTemas= function () {
 $.getJSON(api.url, function (temas) {
    temas.forEach(crearTemas);
  });
};
var crearTemas = function (tema) {
 var autor = tema.author_name;
 var contenido = tema.content;
 console.log(contenido)
 var $autor = $("<p /> ");
 var $contenindoTema = $("<a />")
 $autor.text(autor);
 $contenindoTema.text(contenido);
 $content.append($contenindoTema, $autor);

};

$(document).ready(cargarPagina);
