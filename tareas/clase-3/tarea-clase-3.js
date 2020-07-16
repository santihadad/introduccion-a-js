// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre

/*
const NOMBRE_MIO = 'santiago';
const NOMBRE_AMIGO = 'hernan';
let nombreUsuario = prompt('Escriba su nombre porfavor')||(' ').toLowerCase()

if (NOMBRE_MIO===nombreUsuario){
    console.log(`Hola, Tocayo!, yo tambien me llamo ${nombreUsuario}`);
}
else if (nombreUsuario===NOMBRE_AMIGO){
    console.log(`Hola ${nombreUsuario} te llamas igual que mi amigo`);
}
else if (nombreUsuario.trim().length===0){
    console.log('No ingresaste ningun nombre');
}
else {
    console.log(`Hola ${nombreUsuario}`);
}
*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
/*
const edadMia = 21
const preguntaEdad = "Que edad tenes?"
let edadUsuario = Number(prompt(preguntaEdad))

if (edadMia === edadUsuario){
    console.log('Mi edad es igual que la de usted')
}
else if (edadMia > edadUsuario) {
    console.log('Mi edad es mayor que la de usted')
}
else {console.log('Mi edad es menor que la de usted')}
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
alert('Bienvenido al Bar de Santiago')
let edad
let respuestaSi = 'si'
let respuestaNo = 'no'
const edadMinima = 18
const documento = prompt('Indique con "si" o "no", si tiene el documento en mano' || "").toLowerCase()

if (documento === respuestaSi) {
    edad = Number(prompt('Indique su edad con numeros'));
    if (edad >= edadMinima) {
        console.log('Usted puede ingresar');
    }
    else if (edad < edadMinima){
        console.log('Usted no puede ingresar')
    }
    else {console.log('No entendi la respuesta de la edad')}

}
else if (documento === respuestaNo) {
    console.log('Se necesita documento para ingresar');
}
else {
    console.log('No entendimos su respuesta');
}
*/
