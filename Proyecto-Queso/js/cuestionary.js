var tabla = [
    { nombre: "Alberto", Apellidos: "Trujillo Carballo", Telefono: "669453125", email:"adorolasbicis@gmail.com"},
    { nombre: "Amante", Apellidos: "Del Queso", Telefono: "123456789", email:"adoroelqueso@gmail.com"},
    
    
];

window.onload = cargarEventos;

function cargarEventos(){
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    document.getElementById("formulary").addEventListener("submit", nuevosDatos, false);
}

function mostrarTabla(){

    var cuerpoTabla = document.getElementById("datos-tabla");

    tablaLLena = "";
    
    for (var i = 0; i<tabla.length; i++){
    tablaLLena += "<tr><td>" 
    + tabla[i].nombre + "</td><td>" + tabla[i].Apellidos + "</td><td>" + 
    tabla[i].Telefono + "</td><td>" + tabla[i].email + "</td></tr>";
}

    cuerpoTabla.innerHTML = tablaLLena;
}

function nuevosDatos(event){
    event.preventDefault();

    var nombreIntroducido = document.getElementById("Name").value;
    var apellidoIntroducido = document.getElementById("last_Name").value;
    var telefonoIntroducido = document.getElementById("telephone-number").value;
    var emailIntroducido = document.getElementById("email").value;

    var nuevoDato = {nombre: nombreIntroducido, Apellidos: apellidoIntroducido, Telefono: telefonoIntroducido, email: emailIntroducido};
    tabla.push(nuevoDato);
}