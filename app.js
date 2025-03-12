// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("DEBES INGRESAR NOMBRE DE UN AMIGO");
        return;
    }
    
    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();  
    visualizarAmigos();
}

function visualizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Sin amigos para sortear');
        return;
    }

    let listaSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[listaSorteado];

    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto seleccionado es: ${amigoSorteado}`;

    // Eliminar al amigo sorteado del array
    amigos.splice(listaSorteado, 1);

    // Actualizar la lista de amigos en pantalla
    visualizarAmigos();
}
