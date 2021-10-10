
/*Validar con JavaScript el nombre de usuario y contraseña. Para ello se almacenará en el fichero un array de al menos 3 objetos con las propiedades usuario y contraseña.*/

const validacionForm = () => {
    let nombreForm = document.getElementById("nombre").value
    let contrasenaForm = document.getElementById("contrasena").value
    localStorage.setItem("Nombre", nombreForm)
    localStorage.setItem("Contraseña", contrasenaForm)
}

let botonEnviar = document.getElementById("boton"); 
    botonEnviar.addEventListener("click", validacionForm);

