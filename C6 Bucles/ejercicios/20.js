function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var suma=0;
   var i=1;
   while (i<=n){
     suma=suma+i;
     i=i+1;
     if (suma>=100){
      break;
     }
   } return suma;
 }

module.exports = sumarHastaNConBreak;
