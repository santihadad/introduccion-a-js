/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $btnAgregar = document.querySelector('#button-add');
const $btnQuitar = document.querySelector('#button-remove');
const $btnCalcuar = document.querySelector('#button-calculate');

$btnAgregar.onclick = function () {
  createInputFamily();
  showtBtnCalculate();
  hideStatics();
  event.preventDefault();
}

$btnQuitar.onclick = function () {
  hideStatics();
  if (!removeInputFamily()) {
    hideBtnCalculate();
  }
  event.preventDefault();

}

$btnCalcuar.onclick = function () {
  const salaries = getAllSalary();

  showSalaries('max', getMaxSalary(salaries));
  showSalaries('min', getMinSalary(salaries));
  showSalaries('avgY', getAvgYearSalary(salaries));
  showSalaries('avgM', getAvgMonthSalary(salaries));
  showStatics();
  event.preventDefault();
}

function createInputFamily() {

  const $myDiv = document.createElement('div');
  $myDiv.className = 'salary';

  const $myLabel = document.createElement('label');
  $myLabel.textContent = 'Sueldo familiar';

  const $myInput = document.createElement('input');
  $myInput.type = 'number';

  $myDiv.appendChild($myLabel);
  $myDiv.appendChild($myInput);

  const $family = document.querySelector('#family');
  $family.appendChild($myDiv);

}

function removeInputFamily() {
  const $family = document.querySelector('#family');

  if ($family.childElementCount >= 1) {
    $family.removeChild(family.lastChild);

    if ($family.childElementCount === 0) {
      return false;
    }
    else {
      return true;
    }
  }
}


function getAllSalary() {

  const $integrantes = document.querySelectorAll('.salary input');
  const salary = [];

  for (let i = 0; i < $integrantes.length; i++) {
    if ($integrantes[i].value !== "") {
      salary.push(Number($integrantes[i].value));

    }

  }

  return salary

}

function showSalaries(tipo, valor) {
  document.querySelector(`#${tipo}-salary`).textContent = valor
}

function getMaxSalary(salary) {
  let max = salary[0];
  for (let i = 1; i < salary.length; i++) {
    if (salary[i] > max)
      max = salary[i]
  }
  return max
}

function getMinSalary(salary) {
  let min = salary[0];
  for (let i = 1; i < salary.length; i++) {
    if (salary[i] < min) {
      min = salary[i]
    }
  }

  return min

}

function getAvgMonthSalary(salary) {
  let total = 0;
  for (let i = 0; i < salary.length; i++) {
    total += salary[i];

  }
  return (total / salary.length).toFixed(2);
}

function getAvgYearSalary(salary) {
  let total = 0;
  for (let i = 0; i < salary.length; i++) {
    total += salary[i] * 12;
  }
  return (total / salary.length).toFixed(2);
}

function showtBtnCalculate() {
  document.querySelector('#button-calculate').className = ""
}

function hideBtnCalculate() {
  document.querySelector('#button-calculate').className = "oculto";
}

function showStatics() {
  document.querySelector('#statics').className = ""
}

function hideStatics() {
  document.querySelector('#statics').className = "oculto"
}