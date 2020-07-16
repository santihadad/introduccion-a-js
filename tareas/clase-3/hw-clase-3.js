// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre

/*
const nombreUsuario = (prompt("Ingrese su nombre") || '').toLowerCase();
const NOMBRE_AMIGO = "manuel";
const MI_NOMBRE = "santiago";

if (MI_NOMBRE === nombreUsuario) {
  console.log("Hola Tocayo! yo tambien me llamo Santiago")
}
else if (NOMBRE_AMIGO === nombreUsuario) {
  console.log(`Hola ${nombreUsuario} te llamas igual que mi amigo`)
}
else if (nombreUsuario.trim().length === 0) {
  console.log("No ingresaste un nombre")
}
else {
  console.log(`Hola ${nombreUsuario}`)
};
*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*
const edadUsuario = Number(prompt('Ingrese su edad'));
const EDAD_MIA = 22;

if (EDAD_MIA === edadUsuario) {
  console.log("Tenemos la misma edad")
}
else if (edadUsuario < EDAD_MIA) {
  console.log("Tenes menos edad que yo")
}
else if (edadUsuario > EDAD_MIA) {
  console.log("Tenes mas edad que yo")
}
else {
  console.log("Tenes mas edad que yo")
};
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

/*
const solicitudDocumento = (prompt('Indique con "si" o "no" en caso de tener o no el documento') || "").toLocaleLowerCase();

if (solicitudDocumento === "si") {
  const edadUsuario = Number(prompt("Indique su edad"))
  if (edadUsuario >= 18) {
    console.log("Usted puede ingresar al bar. Bienvenido!!")
  }
  else if (edadUsuario < 18) {
    console.log("No puede ingresar al bar ya que no tiene la edad minima")
  }
  else {
    console.log("No entendi su respuesta")
  }
}
else if (solicitudDocumento === "no") {
  console.log("No tiene documento por lo que no podra ingresar")
}
else {
  console.log("No entendi su respuesta")
}
*/