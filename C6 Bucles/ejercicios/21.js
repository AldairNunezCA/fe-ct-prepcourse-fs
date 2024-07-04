function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  
  var resultado = Math.log2(numero);
  return Number.isInteger(resultado);
}

module.exports = esPotenciaDeDos;
