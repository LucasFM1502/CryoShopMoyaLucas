
class Juego {
  constructor(nombre, precio){
          this.nombre = nombre;
          this.precio = precio;
}
}

function TotalPrevio(array){
      let total = 0;
      array.forEach ( JuegoCompra => {
        total = JuegoCompra.precio * JuegoCompra.cantidad
      })
        return total;
}

function Impuestos(precioArg) {
    const IVA = 1.21
    const servDigital = 0.05
    const impPais = 0.08
    const percepcion = 0.45
    
  
    return (IVA + servDigital + impPais + percepcion) * precioArg
}

function Billetera(precioFinal) {
      if (precioFinal > 6000) {
        return "Ouch! Todo sea por vicear."
      }else{
        return "¡Bien ahi con los ahorros!"
      }
}

const carritoCompra = [ ]
const listadeJuegos = [ { ID: 1, nombre: "TLOU", precio: 2500, cantidad: 100},
                        { ID: 2, nombre: "L4D2", precio: 800, cantidad: 100},
                        { ID: 3, nombre: "Skyrim", precio: 1200, cantidad: 100}]

let mostrarJuegos = ""
listadeJuegos.forEach (el => {
    mostrarJuegos += " ID: " +el.ID + " Nombre: "+el.nombre + " Precio: $"+el.precio+"\n"

})


let nombre = prompt("Bienvenidx a la tienda de juegos digitales para Argentina. Ingrese su nombre y apellido.")
alert ("Bienvenidx " +nombre)

let mensajeFinal = ""

do {
  alert (mostrarJuegos)
  let id = prompt("Ingrese el ID del juego deseado.")
  if (!isNaN(id)) {
        if (listadeJuegos.some( juego => juego.ID == id)) {

          let cantidad = prompt("¿Cuantos desea llevar?")
          const JuegoCompra = (listadeJuegos.find( juego => juego.ID == id))
          JuegoCompra.cantidad = cantidad;
          carritoCompra.push(JuegoCompra)
        }else{ alert ("ID no valido.")}
  }


  mensajeFinal = prompt("Si ya ha finalizado con su compra ingrese \"SI\". De lo contrario ingrese cualquier caracter para continuar.").toUpperCase()
}while (mensajeFinal != "SI")

let precioenArg = alert("Su juego previo a impuestos es de $" + TotalPrevio(carritoCompra))
let precioArg = TotalPrevio(carritoCompra)


precioFinal = Impuestos(precioArg)
alert("El valor del juego con impuestos agregados es de $" + precioFinal + "\nGracias por su compra!")
alert(Billetera(precioFinal))