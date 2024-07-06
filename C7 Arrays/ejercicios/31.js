function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  
  var arrayDeTexto = texto.split('');
  arrayDeTexto.reverse();
  var nuevoTexto = arrayDeTexto.join('');
  return nuevoTexto
}

module.exports = invertirTexto;
