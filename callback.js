function siguiente(x, done) {
  done(x + 1)
}

function doble(x, done) {
  done(x * 2)
}

function imprimir(resultado) {
  console.log('El resultado =>', resultado)
}

function calcularSiguienteEImprimir(elDoble){
  siguiente(elDoble, imprimir)
}

siguiente(7, imprimir)
doble(7, imprimir)
doble(7, calcularSiguienteEImprimir)