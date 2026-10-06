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
let intentos = 0
let claveIngresada =""
let precio = 0
let descuento = 0
let s_porcentaje = 0
let precioFinal = 0

if (opcion == 1) {
    cantidadProductos= prompt("¡Perfecto! ¿cuantos productos deseas calcular?")
} else if (opcion == 2) {
    claveIngresada = prompt("Ingresa la clave para acceder a caja:")
} else {
    alert("Opción no válida. Por favor, recarga la página e intenta nuevamente.")
}

if (cantidadProductos > 0) {
    for (let i = 1; i <= cantidadProductos; i++) {
        precio = parseFloat(prompt("Ingresa el precio del producto " + i + ":"))
        descuento = parseFloat(prompt("Ingresa el porcentaje de descuento (sin incluir signo %) para el producto " + i + ":"))
        s_porcentaje = descuento / 100 * precio
        precioFinal = precio - s_porcentaje
        alert(nombre + ", el precio con " + descuento + "% de descuento para el producto " + i + " es: " + precioFinal)
    }
}

if (claveIngresada === clave) {
    alert("¡Bienvenido a caja, " + nombre + "! Puedes proceder con tus compras.")
}

while (intentos < intentosMaximos && claveIngresada !== clave) {
    intentos++
    if (intentos < intentosMaximos) {
        claveIngresada = prompt("Clave incorrecta. Intenta nuevamente (" + (intentosMaximos - intentos) + " intentos restantes):")
    } else {
        alert("Has excedido el número máximo de intentos. Por favor, recarga la página e intenta nuevamente.")
    }
}

console.log("Datos:")
console.log(nombre)
console.log(nacimiento)
console.log(edad + " años")
console.log("Precio: " + precio)
console.log("Dcto: " + descuento + "%")
console.log("Total: " + precioFinal )