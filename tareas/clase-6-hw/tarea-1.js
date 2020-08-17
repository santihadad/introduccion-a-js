/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
function mayorEdad(numeros) {
  let mayorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayorNumero) {
      mayorNumero = numeros[i];
    }
  }
  return mayorNumero;
}
function menorEdad(numeros) {
  let menorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
  }
  return menorNumero;
}
function edadPromedio(numeros) {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }
  return (acumulador / numeros.length).toFixed(2);
}
function ocultarBotonCalculo() {
  document.querySelector("#calcular").className = "oculto";
}
function mostrarBotonCalculo() {
  document.querySelector("#calcular").className = "";
}
function ocultarResultados() {
  document.querySelector("#analisis").className = "oculto";
}
function mostrarResultados() {
  document.querySelector("#analisis").className = "";
}
function mostrarEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
}
function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll(".integrante input");
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}
function crearIntegrante(indice) {
  const $div = document.createElement("div");
  $div.className = "integrante";

  const $label = document.createElement("label");
  $label.textContent = "Edad del integrante #: " + (indice + 1);
  const $input = document.createElement("input");
  $input.type = "number";

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector("#integrantes");
  $integrantes.appendChild($div);
}
function crearIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }
  for (let i = 0; i < cantidadIntegrantes; i++) crearIntegrante(i);
}
function resetear() {
  borrarIntegrantesAnteriores();
  ocultarBotonCalculo();
  ocultarResultados();
}
function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll(".integrante");
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

document.querySelector("#resetear").onclick = resetear;

document.querySelector("#siguiente-paso").onclick = function (event) {
  const $cantidadIntegrantes = Number(
    document.querySelector("#cantidad-integrantes").value
  );
  borrarIntegrantesAnteriores();
  crearIntegrantes($cantidadIntegrantes);
  event.preventDefault();
};

document.querySelector("#calcular").onclick = function (event) {
  const numeros = obtenerEdadesIntegrantes();
  mostrarEdad("mayor", mayorEdad(numeros));
  mostrarEdad("menor", menorEdad(numeros));
  mostrarEdad("promedio", edadPromedio(numeros));
  mostrarResultados();

  event.preventDefault();
};
