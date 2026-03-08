function comprar(producto,precio){

let telefono="56900000000"

let mensaje="Hola quiero comprar "+producto+" precio "+precio

let url="https://wa.me/"+telefono+"?text="+encodeURIComponent(mensaje)

window.open(url)

}
