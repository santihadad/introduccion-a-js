/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

// Mostrar y ocultar la info

function ocultarBotonCalcular() {
  document.querySelector("#calcular").className = "oculto";
}

function mostrarBotonCalcular() {
  document.querySelector("#calcular").className = "";
}

function ocultarBotonReiniciar() {
  document.querySelector("#reiniciar").className = "oculto";
}

function mostrarBotonReiniciar() {
  document.querySelector("#reiniciar").className = "";
}

function ocultarResultados() {
  document.querySelector("#resultados").className = "oculto";
}

function mostrarResultados() {
  document.querySelector("#resultados").className = "";
}

// Obtener los salarios

function obtenerSalarios() {
  const $salarioIntegrante = document.querySelectorAll(".salarioIntegrante");
  const salarios = [];
  for (i = 0; i < $salarioIntegrante.length; i++) {
    if ($salarioIntegrante[i].value == 0 || $salarioIntegrante[i].value == "") {
      continue;
    }
    salarios.push(Number($salarioIntegrante[i].value));
  }
  return salarios;
}

function obtenerSalariosAnuales(salarios) {
  const MESES_DEL_ANIO = 12;
  const salariosAnuales = [];

  for (i = 0; i < salarios.length; i++) {
    let salarioAnual = salarios[i] * MESES_DEL_ANIO;
    salariosAnuales.push(salarioAnual);
  }
  return salariosAnuales;
}

// Interactividad

function calcularIndice() {
  let $indice = document.querySelectorAll(".integrante");
  indice = $indice.length;

  return indice + 1;
}

function borrarTodosLosIntegrantes() {
  let $integrantes = document.querySelectorAll("integrante");
  for (i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove;
  }
}

function crearIntegrante(indice) {
  const $contenedorIntegrante = document.createElement("div");
  $contenedorIntegrante.className = "integrante";

  const $etiquetaIntegrante = document.createElement("label");
  $etiquetaIntegrante.innerText = `Miembro N${indice}`;

  const $inputIntegrante = document.createElement("input");
  $inputIntegrante.className = "salarioIntegrante";
  $inputIntegrante.type = "number";

  const $contenedorIntegrantes = document.querySelector("#integrantes-familia");

  $contenedorIntegrante.appendChild($etiquetaIntegrante);
  $contenedorIntegrante.appendChild($inputIntegrante);
  $contenedorIntegrantes.appendChild($contenedorIntegrante);
}

document.querySelector("#quitar").onclick = borrarIntegrante;
function borrarIntegrante() {
  document.querySelector("#integrantes-familia").lastChild.remove();
  event.preventDefault();
}

document.querySelector("#reiniciar").onclick = reiniciar;
function reiniciar() {
  borrarTodosLosIntegrantes();
  ocultarResultados();
  ocultarBotonCalcular();
  ocultarBotonReiniciar();
}

document.querySelector("#agregar").onclick = function () {
  const indice = calcularIndice();

  crearIntegrante(indice);
  mostrarBotonCalcular();
  mostrarBotonReiniciar();
  event.preventDefault();
};

document.querySelector("#calcular").onclick = function () {
  const salarios = obtenerSalarios();
  const salariosAnuales = obtenerSalariosAnuales(salarios);

  document.querySelector("#mayor-salario").innerText = mayorSalarioAnual(
    salariosAnuales
  );

  document.querySelector("#menor-salario").innerText = menorSalarioAnual(
    salariosAnuales
  );

  document.querySelector(
    "#promedio-salario-anual"
  ).innerText = salarioAnualPromedio(salariosAnuales);

  document.querySelector(
    "#promedio-salario-mensual"
  ).innerText = salarioMensualPromedio(salarios);
  event.preventDefault();
};
