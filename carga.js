let listaJuegos;
let listaJSON = localStorage.getItem("listaJuegos")

if (listaJSON){
    listaJuegos = JSON.parse(listaJSON)
}else{
    listaJuegos = [ ]
}

console.log(listaJuegos)
const formu = document.getElementById("Formu")

formu.addEventListener("submit", (e) => {
    e.preventDefault()

    const id = document.getElementById("id").value
    const nombre = document.getElementById("nombre").value
    const precio = document.getElementById("precio").value
    const descripcion = document.getElementById("descripcion").value

    listaJuegos.push({id: id, nombre: nombre, precio: precio, descripcion: descripcion})

    const listaJuegosJSON = JSON.stringify(listaJuegos)
    localStorage.setItem("listaJuegos" , listaJuegosJSON)

    formu.reset()

    console.log(listaJuegos)
})
