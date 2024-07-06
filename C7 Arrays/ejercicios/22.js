function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tabla = [];
  var num = 0;
  while (num <= 60){
    tabla.push(num);
    num = num + 6;
  } return tabla;
}

module.exports = tablaDelSeis;
