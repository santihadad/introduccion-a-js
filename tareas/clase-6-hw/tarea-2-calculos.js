function mayorSalarioAnual(salariosAnuales) {
  let salarioAnualMayor = salariosAnuales[0];

  for (i = 0; i < salariosAnuales.length; i++) {
    if (salariosAnuales[i] > salarioAnualMayor) {
      salarioAnualMayor = salariosAnuales[i];
    }
  }
  return salarioAnualMayor;
}

function menorSalarioAnual(salariosAnuales) {
  let salarioAnualMenor = salariosAnuales[0];

  for (i = 0; i < salariosAnuales.length; i++) {
    if (salariosAnuales[i] < salarioAnualMenor) {
      salarioAnualMenor = salariosAnuales[i];
    }
  }
  return salarioAnualMenor;
}

function salarioAnualPromedio(salariosAnuales) {
  let acumulador = 0;
  for (i = 0; i < salariosAnuales.length; i++) {
    acumulador = acumulador + salariosAnuales[i];
  }
  return (acumulador / salariosAnuales.length).toFixed(2);
}

function salarioMensualPromedio(salariosMensuales) {
  let acumulador = 0;
  for (i = 0; i < salariosMensuales.length; i++) {
    acumulador = acumulador + salariosMensuales[i];
  }
  return (acumulador / salariosMensuales.length).toFixed(2);
}
