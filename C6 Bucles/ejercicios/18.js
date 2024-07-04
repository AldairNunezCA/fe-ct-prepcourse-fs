function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var inicio = Math.min(a,b);
  var final = Math.max(a,b);
  var producto = 1;
  for (var i=inicio; i<=final; i++){
    producto = producto * i;
  } if (producto === -0) {
    return 0;}
    else {
      return producto;
    }
}
module.exports = productoEntreNúmeros;