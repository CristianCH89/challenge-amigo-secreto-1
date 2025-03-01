const inputAmigo = document.getElementById("amigo");//Capturar el valor del campo de entrada
const listaAmigos = []; //Crear un array para almacenar los nombres
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById("resultado");

//Implementa una función para agregar amigos
function agregarAmigo () {
    
    //Validar la entrada
    if (inputAmigo.value === "" ){
        alert ("Por favor, inserte un nombre.");
        return;
    } 
    
    //Actualizar el array de amigos
    listaAmigos.push (inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    limpiarCaja();
}

//Implementa una función para sortear los amigos,Validar que haya amigos disponibles,Generar un índice aleatorio,Obtener el nombre sorteado,Mostrar el resultado
function sortearAmigo(){
    const numeroAleatoreo = Math.floor ((Math.random() * listaAmigos.length));
    const AmigoSecreto = listaAmigos[numeroAleatoreo];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${AmigoSecreto}</li>`;
}

//Limpiar el campo de entrada
function limpiarCaja(){
    let valorCaja = document.getElementById(`amigo`);
    valorCaja.value = "";
}
