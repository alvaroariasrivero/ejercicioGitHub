function validacion() {
    let x= document.getElementById("contrasena").value
    let text
    if (x.length < 6) {
        text = "La contraseña debe ser más larga"
    } else {
        text = "La contraseña es válida"
    }
    document.getElementById("valido").innerHTML = text;
}