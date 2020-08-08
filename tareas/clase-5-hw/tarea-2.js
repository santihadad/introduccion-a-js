//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonSaludo = document.querySelector("#saludo-usuario");
$botonSaludo.onclick = function () {
  const $nombreUsuario = document.querySelector("#nombre-usuario").value;
  const $segundoNombreUsuario = document.querySelector(
    "#segundo-nombre-usuario"
  ).value;
  const $apellidoUsuario = document.querySelector("#apellido-usuario").value;
  const $edadUsuario = Number(document.querySelector("#edad-usuario").value);
  saludoUsuario = `Bienvenido ${$nombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario}`;
  document.querySelector("h1").textContent = saludoUsuario;
  let nodoPagina = document.querySelector("body");
  let nuevoParrafo1 = document.createElement("p");
  let edadUsuario = document.createTextNode(`Tu edad es ${$edadUsuario}`);
  nuevoParrafo1.appendChild(edadUsuario);
  nodoPagina.appendChild(nuevoParrafo1);
  return false;
};
