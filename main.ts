/**
 * Primero creo una variable que he llamado contador. (Variables)
 * 
 * Al pulsar el botón A incremento el contador siempre que sea menor que 10. Cuando alcance el valor 10 muestro una carita sonriente. OJO. Esto se puede hacer de varias formas.
 */
/**
 * En este ejercicio probamos una variable que usamos como contador.
 * 
 * Usamos condiciones.
 * 
 * Usamos iconos y sonidos.
 */
/**
 * Para cargar el programa pulsamos el botón "Descargar" que hay en la esquina inferior izquierda. Seguramente el programa se haya guardado en "descargas".
 * 
 * Si conectamos la tarjeta micro:bit veremos que aparece como si fuera un pendrive.
 * 
 * Pulsamos sobre el archivo descargado y lo arrastramos y soltamos en "MICROBIT"
 */
input.onButtonPressed(Button.A, function () {
    if (contador < 9) {
        // esto significa que sumamos 1 al contenido del contador
        contador += 1
        basic.showNumber(contador)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    if (contador > 1) {
        contador += -1
        basic.showNumber(contador)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
})
let contador = 0
contador = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
