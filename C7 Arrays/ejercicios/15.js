function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var numeroMasGrande = Math.max(...array);
  var indexDeNumero = array.findIndex((num)=> (num===numeroMasGrande));
  if (indexDeNumero === -1){
    return 0;
  } else {
    return indexDeNumero;
  }
}

module.exports = encontrarIndiceMayor;
