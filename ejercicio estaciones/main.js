function esFechaValida(dia, mes, anio) {
  const fecha = new Date(anio, mes - 1, dia);
  return (
      fecha.getFullYear() === anio &&
      fecha.getMonth() === mes - 1 &&
      fecha.getDate() === dia
  );
}

function obtenerEstacion(mes) {
  if (mes >= 3 && mes <= 5) {
      return 'Otoño';
  } else if (mes >= 6 && mes <= 8) {
      return 'Invierno';
  } else if (mes >= 9 && mes <= 11) {
      return 'Primavera';
  } else {
      return 'Verano';
  }
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

  if (esFechaValida(dia, mes, anio)) {
      const estacion = obtenerEstacion(mes);
      alert(`La fecha ${dia}/${mes}/${anio} es válida y corresponde a la estación ${estacion}.`);
  } else {
      alert("La fecha ingresada no es válida. Por favor, ingresa una fecha válida.");
  }
}

validarFecha();