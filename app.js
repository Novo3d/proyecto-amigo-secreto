//En este arreglo vacio se van ingresar los nombres recibidos
let amigos = [];

//En esta función se muestra el contenido del arreglo en el HTML
function listaDeAmigos(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (const nombre of amigos){
        const item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    }
    //con este console.log puedo ir viendo como el array se va poblando
    //console.log(amigos);
}

//Aquí va a ir el obtener el imput y el botón con sus IDs
function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreNuevo = inputAmigo.value.trim();

    if (nombreNuevo !== ""){
        //Aquí se agrega el nombre del arreglo
        amigos.push(nombreNuevo);

        //Aquí se limpia el campo de texto
        inputAmigo.value ="";

        //Aquí se llama a la función para actualizar la lista en el HTML listaDeAmigos()
        listaDeAmigos();
    }  else {
        //Se muestra un alerta si el campo está vacío
        alert("Por favor, inserte un nombre");
    }
}

