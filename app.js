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
    console.log(amigos);
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

//Esta es la función encargada de sortear el nombre del amigo secreto
function sortearAmigo(){

    if (amigos.length === 0) {
        alert('No hay amigos para sortear. ¡Agrega a tus amigos primero!'); //solo en caso de estar vacío muestra esto
        return; //Esto saca de la función
    }

//Genera el indice aleatorio    
const indiceAleatorio = Math.floor(Math.random() * amigos.length);
//Se obtiene el nombre sorteado
const amigoSorteado = amigos[indiceAleatorio];
//muestra el resultado sorteado
const resultadoElemento = document.getElementById("resultado");
resultadoElemento.innerHTML = `<p>¡El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>!</p>`;

}
