//Crear una funcion que tome como parametro el anio actual y el anio de nacimiento
//Calcular la edad del usuario
//Preguntarle estos datos al usuario y guardarlos en 2 variables
//ejecutar la funcion con estos datos
//imprimir el resultado en la consola

const anioActual = 2020;
let anioNacimiento = Number(prompt("Indique en que año nacio"));
function calcularEdadUsuario(anioActual, anioNacimiento) {
  return anioActual - anioNacimiento
};
console.log("Tenes " + calcularEdadUsuario(anioActual, anioNacimiento) + " años");

//Preguntar el salario anual y calcular el salario mensual
//Preguntar salario mensual y calcular anual
//hacer lo mismo con el diario, por hora, etc

let salarioMensual = Number(prompt("Ingrese su salario mensual"));
let horasTrabajadas = Number(prompt("Indique la cantidad de horas que trabaja por dia"));
let diasTrabajados = Number(prompt("Indique la cantidad de dias que trabaja por semana"));

function salarioAnual(salarioMensual) {
  return salarioMensual * 12
};
function salarioDiario(salarioMensual) {
  return salarioMensual / (diasTrabajados * 4)
};
function salarioHs(salarioMensual) {
  return salarioMensual / (diasTrabajados * horasTrabajadas * 4)
};
console.log("Su salario anual es de " + salarioAnual(salarioMensual));
console.log("Su salario diario es de " + salarioDiario(salarioMensual));
console.log("Su salario por hora es de " + salarioHs(salarioMensual));