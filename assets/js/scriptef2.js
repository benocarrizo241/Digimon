// consumiendo API

//capturamos el valor del ID contenido
var contenido= document.querySelector("#contenido")

fetch('https://digimon-api.vercel.app/api/digimon')
// promesa
.then(response => response.json())
// aca diremos lo que ocurrira cuando tengamos los objetos en los datos (promesa)

.then(datos => {
    tabla(datos)
}) 

// catch se usa para gestionar excepciones (se usar para post)
.catch(function(){

})

function tabla(datos){
    // se limpia la info dentro de la ID
    contenido.innerHTML= ""
    // la  API nos devulve 209 datos, los recorremos con un for
    for(let temp of datos){
        //se escribe en cada iteracion, y con las comilla se interpola la info en la fila y columna de la tabla
        contenido.innerHTML+=
        `
        <tr>

            <th scope="row">1</th>
            <td>${temp.name}</td>
            <td>${temp.level}</td>
            <td><img src="${temp.img}" alt="Imagen de ${temp.name}" class="img-fluid w-25"></td> 


        </tr>
        `
        if(temp.N == 10){
            break

        }
        
    }
}