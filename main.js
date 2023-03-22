class JuegosController {
  constructor(){
    this.listaJuegos = [ ]
  }

  traerJuegos(){
    let listaJSON = localStorage.getItem("listaJuegos")
    if(listaJSON){
    this.listaJuegos = JSON.parse(listaJSON)
    }else{
    this.listaJuegos = [ ]
  }
  }

  renderDOM(nodo){
    this.listaJuegos.forEach( juego => {
      nodo.innerHTML += 
      `<div class="cards"><h3>${juego.nombre}</h3> 
      <p>$${juego.precio}</p> 
      <p>${juego.descripcion}</p></div>`
    
  });
  }

  filtrarporMIN(precio){
    this.listaJuegos = this.listaJuegos.filter ( juego => juego.precio >= precio);
  }

  filtrarporMAX(precio){
    this.listaJuegos = this.listaJuegos.filter ( juego => juego.precio <= precio);
  }

  filtrarporPAL(palabra){
    this.listaJuegos = this.listaJuegos.filter ( juego => juego.nombre.includes(palabra))
  }

  limpiarDOM(nodo){
      nodo.innerHTML = ""
  }

}

//DOM
const contenedorProductos = document.getElementById("productos_display")
const precio_max = document.getElementById("precio_max")
const precio_min = document.getElementById("precio_min")
const buscador = document.getElementById("buscador")



//APP
const controladorJuegos = new JuegosController()
controladorJuegos.traerJuegos()
controladorJuegos.renderDOM(contenedorProductos)

//FILTROS
precio_max.addEventListener("change", () =>{
  if(precio_max.value > 0){
  controladorJuegos.traerJuegos()
  controladorJuegos.filtrarporMAX ( precio_max.value )
  controladorJuegos.limpiarDOM (contenedorProductos)
  controladorJuegos.renderDOM (contenedorProductos)
}else{
  controladorJuegos.traerJuegos()
  controladorJuegos.limpiarDOM (contenedorProductos)
  controladorJuegos.renderDOM (contenedorProductos)
}
} )

precio_min.addEventListener("change", () =>{
if(precio_min.value > 0){
  controladorJuegos.traerJuegos()
  controladorJuegos.filtrarporMIN ( precio_min.value )
  controladorJuegos.limpiarDOM (contenedorProductos)
  controladorJuegos.renderDOM (contenedorProductos)
}else{
  controladorJuegos.traerJuegos()
  controladorJuegos.limpiarDOM (contenedorProductos)
  controladorJuegos.renderDOM (contenedorProductos)
}
} )

buscador.addEventListener ("change", () =>{
  controladorJuegos.traerJuegos()
  controladorJuegos.filtrarporPAL (buscador.value)
  controladorJuegos.limpiarDOM (contenedorProductos)
  controladorJuegos.renderDOM (contenedorProductos)
})