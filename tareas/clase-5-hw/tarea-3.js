//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let $botonCargarDatos = document.querySelector("#cargar-datos");
let $botonCalcularTiempoToal = document.querySelector("#tiempo-total");
let segundos = 0;
let minutos = 0;
let horas = 0;

function calcularTiempoTotal(hs, min, seg) {
  horas = horas + hs;
  minutos = minutos + min;
  segundos = segundos + seg;

  while (segundos > 59) {
    minutos++;
    segundos = segundos - 60;
  }
  while (minutos > 59) {
    horas++;
    minutos = minutos - 60;
  }
  return [horas, minutos, segundos];
}

$botonCargarDatos.onclick = function () {
  let $horas = Number(document.querySelector("#horas").value);
  let $minutos = Number(document.querySelector("#minutos").value);
  let $segundos = Number(document.querySelector("#segundos").value);

  let tiempoTotalVideo = calcularTiempoTotal($horas, $minutos, $segundos);
  console.log(tiempoTotalVideo);

  let totalHoras = tiempoTotalVideo[0];
  let totalMinutos = tiempoTotalVideo[1];
  let totalSegundos = tiempoTotalVideo[2];
  $botonCalcularTiempoToal.onclick = function () {
    let nodoPagina = document.querySelector("strong");
    let texto = document.createTextNode(
      `El tiempo total de video reproducido es de ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos`
    );
    nodoPagina.appendChild(texto);
  };
};
