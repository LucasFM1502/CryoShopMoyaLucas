class JuegosController {
  constructor() {
    this.listaJuegos = []
  }

  levantar() {
    let obtenerlistaJSON = localStorage.getItem("listaJuegos")

    if (obtenerlistaJSON) {
      this.listaJuegos = JSON.parse(obtenerlistaJSON)
    }
  }

  juegosCargados() {
    this.listaJuegos = [
      { id: 1, nombre: "Mortal Kombat 11", precio: 3500, descripcion: "Multiplayer, Pelea, Online, Historia.", stock: 10, cantidad: 1, img: "./img/MK11Cover.jpg", alt: "MK 11" },
      { id: 2, nombre: "The Last of Us", precio: 3000, descripcion: "Survival, Historia, Singleplayer.", stock: 10, cantidad: 1, img: "./img/TLOUCover.jpg", alt: "TLOU" },
      { id: 3, nombre: "Back 4 Blood", precio: 4750, descripcion: "Multiplayer, Shooter, Survival.", stock: 10, cantidad: 1, img: "./img/Back4BloodCover.jpg", alt: "B4B" },
      { id: 4, nombre: "GTA V", precio: 3700, descripcion: "Online, Singleplayer, Shooter.", stock: 10, cantidad: 1, img: "./img/GTA5Cover.jpg", alt: "GTA V" },
      { id: 5, nombre: "Injustice 2", precio: 3000, descripcion: "Multiplayer, Pelea, Online, Historia.", stock: 10, cantidad: 1, img: "./img/Injustice2Cover.jpg", alt: "Injustice 2" },
      { id: 6, nombre: "The Witcher 3", precio: 5000, descripcion: "Survival, RPG, Mundo Abierto, Singleplayer.", stock: 10, cantidad: 1, img: "./img/Witcher3Cover.jpg", alt: "The Witcher 3" },
      { id: 7, nombre: "Portal 2", precio: 2500, descripcion: "Singleplayer, Shooter, Historia.", stock: 10, cantidad: 1, img: "./img/Portal2Cover.jpg", alt: "Portal 2" },
      { id: 8, nombre: "Skyrim", precio: 3200, descripcion: "Survival, RPG, Mundo Abierto, Singleplayer.", stock: 10, cantidad: 1, img: "./img/SkyrimCover.png", alt: "Skyrim" }]
  }

  render() {
    this.listaJuegos.forEach(juego => {
      contenedor_productos.innerHTML += `
      <div class="card" style="width: 18rem;">
          <img src="${juego.img}" class="card-img-top" alt="${juego.alt}">
          <div class="card-body">
        <h5 class="card-title">${juego.nombre}</h5>
          <p class="card-text">
          ${juego.descripcion}
          $${juego.precio}
        </p>
          <a href="#" class="btn btn-primary" id="juego ${juego.id}">Agregar al carrito</a>
      </div>
    </div>`
    })
  }


}

class CarritoController {
  constructor() {
    this.listaCarrito = []
  }

  levantar() {
    let obtenerlistaJSON = localStorage.getItem("listaCarrito")

    if (obtenerlistaJSON) {
      this.listaCarrito = JSON.parse(obtenerlistaJSON)
    return true}
    else { return false}
  }

  agregar(juego) {
    let buscarJuego = this.listaCarrito.some( e => e.id == juego.id)

    if (buscarJuego){
      const juegolisto = this.buscar(juego.id)
      juegolisto.cantidad += 1
    }else{
      this.listaCarrito.push(juego)
    }

    let enformatoJSON = JSON.stringify(this.listaCarrito)
    localStorage.setItem("listaCarrito", enformatoJSON)
  }

  render(contenedor_carrito) {
    contenedor_carrito.innerHTML = ""

    this.listaCarrito.forEach(juego => {
      contenedor_carrito.innerHTML += `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
        <img src="${juego.img}" class="img-fluid rounded-start" alt="${juego.alt}">
      </div>
        <div class="col-md-8">
          <div class="card-body">
        <h5 class="card-title">${juego.nombre}</h5>
        <p class="card-text">$${juego.precio}</p>
        <p class="card-text"><small class="text-muted">${juego.descripcion}</small></p>
        <p class="card-text"><small class="text-muted">Cantidad: ${juego.cantidad}</small></p>
        <button id="eliminar${juego.id}"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      </div>
    </div>`
    })

    this.listaCarrito.forEach( juego => {
      document.getElementById(`eliminar${juego.id}`).addEventListener("click" , () => {
        //ELIMINAR DEL ARRAY
        this.borrar(juego)
        //ACTUALIZAR STORAGE
        localStorage.setItem("listaCarrito", JSON.stringify(this.listaCarrito))
        //VOLVER A IMPRIMIR
      this.render(contenedor_carrito) 
    } )
          })
   
  }

  calcularPrecio(){
      return this.listaCarrito.reduce((acumulador, juego) => acumulador + juego.precio * juego.cantidad ,0)
      
  }

  calcularconIMP (){
    const IVA = 1.21
    const servDigital = 0.05
    const impPais = 0.08
    const percepcion = 0.45
      
    return this.calcularPrecio() * (IVA + servDigital + impPais + percepcion)
  }

  precioDOM(precio_sinIMP, precio_total){
    precio_sinIMP.innerHTML = "$" + this.calcularPrecio()
    precio_total.innerHTML = "$" + this.calcularconIMP()
  }

  limpiar(){
    this.listaCarrito = []
    localStorage.removeItem("listaCarrito")
  }

  borrar(juego){
    let index = this.listaCarrito.indexOf(juego)
    this.listaCarrito.splice(index, 1)

    this.precioDOM(precio_sinIMP, precio_total)
  }

  buscar(id){
    return this.listaCarrito.find(juego => juego.id == id)
  }

}

//DECLARANDO CONTROLADORES Y LEVANTANDO JUEGOS
const controladorJuegos = new JuegosController
controladorJuegos.levantar()
controladorJuegos.juegosCargados()

const controladorCarrito = new CarritoController
const traerCarrito = controladorCarrito.levantar()

//Para el DOM
const contenedor_productos = document.getElementById("productos_display")
const contenedor_carrito = document.getElementById("contenedor_carrito")
const finalizar_compra = document.getElementById("finalizar")
const precio_sinIMP = document.getElementById("precio_sinIMP")
const precio_total = document.getElementById("precio_total")

// PRODUCTOS EN APP

controladorJuegos.render(contenedor_productos)
controladorCarrito.render(contenedor_carrito)

// ACTUALIZANDO PRECIOS EN CARRITO AL REFRESCAR PAGINA
if(traerCarrito){
  controladorCarrito.precioDOM(precio_sinIMP, precio_total)
}

// AGREGAR AL CARRITO

controladorJuegos.listaJuegos.forEach(juego => {
  const futuraCompra = document.getElementById(`juego ${juego.id}`)
  futuraCompra.addEventListener("click", () => {

    controladorCarrito.agregar(juego)
    controladorCarrito.levantar()
    controladorCarrito.render(contenedor_carrito)
    controladorCarrito.precioDOM(precio_sinIMP, precio_total)

    Toastify({
      text: "Producto agregado al carrito.",
      duration: 2000,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right, #090979, #00d4ff)",
      }
    }).showToast();

  })
})

// ALERT DE FINALIZACION DE COMPRA
finalizar_compra.addEventListener("click", () => {

  if(controladorCarrito.listaCarrito.length > 0){

  controladorCarrito.limpiar()
  controladorCarrito.render(contenedor_carrito)
  controladorCarrito.precioDOM(precio_sinIMP, precio_total)

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Ha realizado su compra con éxito!',
    showConfirmButton: true,
    timer: 2000
  })}else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tienes que añadir al menos un producto para realizar una compra.',
      })
   
  }
})

