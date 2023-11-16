function esFechaValida(dia, mes, anio) {
  const fecha = new Date(anio, mes - 1, dia);
  return (
    fecha.getFullYear() === anio &&
    fecha.getMonth() === mes - 1 &&
    fecha.getDate() === dia
  );
}

function obtenerEstacion(mes, dia) {
  if ((mes === 3 && dia >= 21) || (mes > 3 && mes < 6) || (mes === 6 && dia < 21)) {
    return 'Otoño';
  } else if ((mes === 6 && dia >= 21) || (mes > 6 && mes < 9) || (mes === 9 && dia < 23)) {
    return 'Invierno';
  } else if ((mes === 9 && dia >= 23) || (mes > 9 && mes < 12) || (mes === 12 && dia < 21)) {
    return 'Primavera';
  } else {
    return 'Verano';
  }
}

function esAnoBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function validarFecha() {
  let dia, mes, anio;

  do {
    dia = parseInt(prompt("Ingresa el día (número):"));
  } while (isNaN(dia));

  do {
    mes = parseInt(prompt("Ingresa el mes (número):"));
  } while (isNaN(mes));

  do {
    anio = parseInt(prompt("Ingresa el año (número):"));
  } while (isNaN(anio));

  if (!esFechaValida(dia, mes, anio) || (esAnoBisiesto(anio) && mes === 2 && dia > 29)) {
    alert("La fecha ingresada no es válida. Por favor, ingresa una fecha válida.");
  } else {
    const estacion = obtenerEstacion(mes, dia);
    alert(`La fecha ${dia}/${mes}/${anio} es válida y corresponde a la estación ${estacion}.`);
  }
}

validarFecha();
