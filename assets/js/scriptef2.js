// declaración de variables
var inputSearch = document.getElementById("buscar");

// consumiendo API

// capturamos el valor del ID contenido
var contenido = document.querySelector("#contenido");

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        tabla(datos);
    })
    .catch(function() {

    });

function tabla(datos) {
    contenido.innerHTML = "";
    for (let temp of datos) {
        contenido.innerHTML +=
            `
            <tr>
                
                <td>${temp.name}</td>
                <td>${temp.level}</td>
                <td><img src="${temp.img}" alt=" ${temp.name}" class="img-fluid img-div" onclick="mostrarImagenPopUp('${temp.img}')"></td> 
            </tr>
            `;
    }

    inputSearch.addEventListener("input", function(event) {
        var inputText = event.target.value.toLowerCase();
        var filas = contenido.getElementsByTagName("tr");
        for (var i = 0; i < filas.length; i++) {
            var columnaNombre = filas[i].getElementsByTagName("td")[0];
            var textoNombre = columnaNombre.textContent.toLowerCase();
            if (textoNombre.includes(inputText)) {
                filas[i].style.display = "";
            } else {
                filas[i].style.display = "none";
            }
        }
    });
}
// popup
$(document).on("click", "img", function() {
    var imgSrc = $(this).attr("src");
    var digimonName = $(this).attr("alt");
    $("#digimonModalImage").attr("src", imgSrc);
    $("#digimonModalLabel").text(digimonName);
    $("#digimonModal").modal("show");
  });


