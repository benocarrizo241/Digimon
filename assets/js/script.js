//SE BUSCA CAPTURAR LO DEL HTML

//incular una función a un evento "ready" del documento. El evento "ready" se 
//dispara cuando el DOM (Modelo de Objeto del Documento) ha sido completamente 
//cargado y está listo para ser manipulado.
/*Dentro de la función, se crea una variable llamada "miTexto" que almacenará el texto 
contenido en el elemento HTML con el identificador "contenido". El método $("contenido").text() 
busca un elemento en el DOM que tenga un identificador de "contenido" y obtiene su texto interno. 
Es importante tener en cuenta que el identificador "#contenido" se usa para seleccionar un elemento 
por su ID en jQuery, por lo que el elemento HTML correspondiente debería tener el atributo "id" establecido como 
"contenido".

En resumen, esta línea de código de jQuery espera a que el documento esté completamente cargado y
 luego obtiene el texto interno de un elemento con el ID "contenido" y lo almacena en una variable llamada "miTexto".*/

//$(document).ready(function(){
    //var miTexto = $("#contenido").text();
    //var miTexto = $("#contenido").html();
    //var miAtributo = $("#nombre").attr("type"); // aca tratamos de capturar el atributo
    //alert(miTexto);
    //alert(miAtributo);
//})
// val captura los datos del input


// alterna entre mostrar y no mostrar el titulo
$("#caja1").mouseenter(function(){
    $("#caja2").toggle();
})
$("#boton").click(function(){
    var nombre=$("#nombre").val();
    var correo=$("#correo").val();

    alert("su nombre es: " +nombre + " y su correo es: " + correo);
})

// acciones de los botones
$("#boton1").click(function(){
    $("#contenido").css("background-color", "greenyellow");
})

$("#boton2").click(function(){
    $("#texto").text("Text escrito usando JQuery");
})
// para que se pueda devolver al color anterior
$("#boton1").dblclick(function(){
    $("#contenido").css("background-color", "white");
    $("#texto").text("Lorem ipsum dolor sit amet consectetur adipisicing elit."+
    "Laudantium consequuntur enim eum facere minus dignissimos! Ea iste quae"
     +"autem est itaque vero aspernatur ullam fugit culpa sed. Eum, eius numquam.");
})