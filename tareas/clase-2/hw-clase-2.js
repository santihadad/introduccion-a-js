// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el operador es '+', vamos a usar la función para sumar.
//      Si no, vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si tenemos un operador igual a '+', llamamos la función 'sumar' con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!

let operador = prompt("Ingrese el simbolo de suma, resta, multiplicacion o division");
let numero1 = 5;
let numero2 = 10;
let resultado;

function sumar(numero1, numero2) {
  return numero1 + numero2
};
function multiplicar(numero1, numero2) {
  return numero1 * numero2
};
function dividir(numero1, numero2) {
  return numero1 / numero2
};
function restar(numero1, numero2) {
  return numero1 - numero2
};
if (operador === "+") {
  resultado = sumar(numero1, numero2)
} else if (operador === "*") {
  resultado = multiplicar(numero1, numero2)
} else if (operador === "/") {
  resultado = dividir(numero1, numero2)
} else if (operador === "-") {
  resultado = restar(numero1, numero2)
} else {
  console.log("El operador ingresado no es valido")
}
if (operador === "+" || operador === "-" || operador === "*" || operador === "/") {
  console.log(`El resultado de ${numero1} ${operador} ${numero2} es ${resultado} `);
} else { };