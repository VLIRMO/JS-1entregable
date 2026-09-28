console.log("Calculador de descuentos")
const nombre = prompt("Ingresa tu nombre para comenzar:")
let nacimiento = parseInt(prompt("Ingresa año de nacimiento:"))
let c_nacimiento = 2026 - nacimiento
let precio = Number(prompt("¡Hola, " + nombre +"!" + ", Ingresa el precio a calcular descuento"))
let porcentaje = parseFloat(prompt("ingresa el Porcentaje de descuento (sin incluir signo %)"))
let s_porcentaje = porcentaje / 100 * precio
let resultado = precio - s_porcentaje 

alert(nombre +", el precio con " + porcentaje + "% de descuento es: " + resultado)

console.log("Datos:")
console.log(nombre)
console.log(nacimiento)
console.log(c_nacimiento + " años")
console.log("Precio: " + precio)
console.log("Dcto: " + porcentaje + "%")
console.log("Total: " + resultado )