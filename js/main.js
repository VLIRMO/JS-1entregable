console.log("Calculador de descuentos")
const nombre = prompt("¡Hola! Ingresa tu nombre para comenzar:")
let nacimiento = parseInt(prompt("Ingresa año de nacimiento:"))
let edad = 2026 - nacimiento
let opcion = prompt("Qué te gustaría hacer? Ingresa 1 para calcular descuento, Ingresa 2 ingresar a caja")
let cantidadProductos = 0
let precioPolera = 25000
let precioPantalon = 40000
let precioZapatillas = 60000
let precioLentes = 15000
const clave = "js123"
const intentosMaximos = 3
let codigoProducto = 0
let claveIngresada = ""
let precio = 0
let descuento = 0
let s_porcentaje = 0
let precioFinal = 0
let intentos = 0
let total = 0

if (opcion == 1) {

  cantidadProductos = parseInt(prompt("¡Perfecto! ¿cuantos productos deseas calcular?"))

   if (cantidadProductos > 0) {
    for (let i = 1; i <= cantidadProductos; i++) {
      precio = Number(prompt("Ingresa el precio del producto " + i + ":"))
      descuento = parseFloat(prompt("Ingresa el porcentaje de descuento (sin incluir signo %) para el producto " + i + ":"))
      s_porcentaje = descuento / 100 * precio
      precioFinal = precio - s_porcentaje
      alert(nombre + ", el precio con " + descuento + "% de descuento para el producto " + i + " es: " + precioFinal)
      console.log("Datos:")
      console.log(nombre)
      console.log(nacimiento)
      console.log(edad + " años")
      console.log("Precio: " + precio)
      console.log("Dcto: " + descuento + "%")
      console.log("Total: " + precioFinal)
    }
  } else {
    alert("Ingresaste una cantidad inválida de productos.")
  }

} else if (opcion == 2) {

  let accesoConcedido = false

  while (intentos < intentosMaximos && !accesoConcedido) {
    claveIngresada = prompt("Ingresa la clave para acceder a caja:")
    intentos++
    
    if (claveIngresada === clave) {
      accesoConcedido = true
      alert("¡Bienvenido a caja, " + nombre + "!")
    } else {
      if (intentos < intentosMaximos) {
        alert("Clave incorrecta. Te quedan " + (intentosMaximos - intentos) + " intentos.")
      } else {
        alert("Has excedido el número máximo de intentos. Por favor, recarga la página e intenta nuevamente.")
      }
    }
  }

if (accesoConcedido == true) {
  cantidadProductos = 0
    while (confirm("Agregar productos?")) {
      codigoProducto = parseInt(prompt("Ingresa el codigo de producto que deseas comprar: (1) Polera, (2) Pantalon, (3) Zapatillas, (4) Lentes)"))

      switch (codigoProducto) {
        case 1:
          precio = precioPolera
          break
        case 2:
          precio = precioPantalon
          break
        case 3:
          precio = precioZapatillas
          break
        case 4:
          precio = precioLentes
          break
        default:
          precio = 0
          alert("Código de producto inválido.")
      }
      cantidadProductos++
      total = total + precio
    }
    alert("Gracias " + nombre + ". El total a pagar es: $" + total)
    
    console.log("Datos:")
      console.log(nombre)
      console.log(nacimiento)
      console.log(edad + " años")
      console.log("Productos:" + cantidadProductos)
      console.log("El total a pagar es: " + total)
  }
}