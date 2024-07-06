function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var vistos = new Set();
  
  for (var i=0; numeros.length; i++){
    if(vistos.has(numeros[i])){
      return numeros [i];
    } else {
      vistos.add(numeros[i]);
    }
  }
  return null;
}

module.exports = encontrarElementoRepetido;