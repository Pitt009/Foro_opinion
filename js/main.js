var api = {
  url: "http://examen-laboratoria-sprint-5.herokuapp.com/topics"
};
var $content = $("#tema_comentario");

var cargarPagina = function () {
  cargarTemas();
  $('.modal').modal();
  $("#anadir").submit(agregarTemas);


};

var cargarTemas= function () {
 $.getJSON(api.url, function (temas) {
    temas.forEach(crearTemas);
  });
};
var plantilla =   '<div class="col s12 m8 offset-m2 l6 offset-l3">'+
        '<div class="card-panel grey lighten-5 z-depth-1">'+
          '<div class="row valign-wrapper">'+
            '<div class="col s2">'+
              '<img src="https://dummyimage.com/100x100/000/fff" alt="" class="circle responsive-img">'+
            '</div>'+
            '<div class="col s10">'+
              '<a>__tema__</a>'+
              '<p>__autor__<p>'+
            '</div>' +
          '</div>' +
        '</div>'+
      '</div>';


var crearTemas = function (tema) {
  var plantillaFinal = "";
  plantillaFinal += plantilla.replace("__tema__", tema.content).replace("__autor__", tema.author_name);
  $content.append(plantillaFinal);
 // var autor = tema.author_name;
 // var contenido = tema.content;
 // var $autor = $("<p /> ");
 // var $contenindoTema = $("<a />")
 // $autor.text(autor);
 // $contenindoTema.text(contenido);
 // $content.append($contenindoTema, $autor);

};

var agregarTemas = function (e) {
  e.preventDefault();
  var crearTema = $("#crear_tema").val();
  var crearAutor = $("#autor").val();
  $.post(api.url, {

    content : crearTema,
    author_name : crearAutor

  }, function (tema) {
    $("#modal1").modal("");
       crearTemas(tema);
  });

}
 var BuscarTemas = function (e) {
   e.preventDefault();
   $.getJSON(api.url, function (temas) {
     var buscar = ("#search").val().toLowerCase();
     var temasFiltrados = temas.filter( function (tema) {
       return temas.content.toLowerCase().indexOf(buscar) >=0;

     });
     crearTemas(temasFiltrados);
  });
};
$(document).ready(cargarPagina);
