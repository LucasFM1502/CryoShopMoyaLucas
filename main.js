
function Impuestos(precioArg) {
    const IVA = 1.21
    const servDigital = 0.05
    const impPais = 0.08
    const percepcion = 0.45
    
    return (IVA + servDigital + impPais + percepcion) * precioArg
}

function Billetera(precioFinal) {
      if (precioFinal > 2000) {
        return "Ouch! Todo sea por vicear."
      }else{
        return "¡Bien ahi con los ahorros!"
      }
}

let nombre = prompt("Bienvenido al calculo de impuestos para juegos en Argentina. Ingrese su nombre y apellido.")
alert ("Bienvenidx " +nombre)

let mensajeFinal = ""

while (mensajeFinal != "ESC") {

let juego = prompt("Ingrese el juego deseado.")
alert ("El juego elegido es " +juego)

let precioArg = Number(prompt("Indique el valor del juego."))
alert ("Su juego previo a impuestos es de $" +precioArg)

precioFinal = Impuestos(precioArg)
alert ("El valor del juego con impuestos agregados es de $" +precioFinal)
alert (Billetera(precioFinal))

mensajeFinal = prompt("Si ya ha finalizado con el simulador ingrese \"ESC\". De lo contrario ingrese cualquier caracter para volver a comenzar.").toUpperCase()
}