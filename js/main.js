console.log("Sistema de ventas y gestión de productos de moda");

const nombre = prompt("¡Hola! Ingresa tu nombre para comenzar:");

let precioPolera = 25000;
let precioPantalon = 40000;
let precioZapatillas = 60000;
let precioLentes = 15000;

const claveSecreta = "js123";
const intentosMaximos = 3;
let total = 0;

const productos = ["polera", "pantalón", "zapatillas", "lentes", "sombrero"];

function mostrarListaProductos(productos) {
  alert("Stock de productos:\n" + productos.join("\n"));

  for (const producto of productos) {
    alert("Producto: " + producto);
  }
}

function gestionarProductos(productos) {

  const opcionGestion = Number(prompt("¿Qué deseas hacer? | 1 - Agregar producto | 2 - Eliminar producto | 3 - Buscar producto | 4 - ver lista de productos"));

  switch (opcionGestion) {
    case 1: {

      const productoAgregado = prompt("Ingresa el nombre del producto que deseas agregar:");
      if (productoAgregado.trim() == "") {
        alert("Debes ingresar un nombre de producto.");
        break;
      }
      const ubicacion = Number(prompt("¿Dónde deseas agregarlo? | 1 - Al inicio | 2 - Al final | 3 - En una posición específica"));
      if (ubicacion == 1) {

        productos.unshift(productoAgregado.trim().toLowerCase());

      } else if (ubicacion == 2) {
        productos.push(productoAgregado.trim().toLowerCase());
      }
      else if (ubicacion == 3) {

        const posicion = Number(prompt("Ingresa la posición (0 a " + productos.length + ") donde deseas agregar el producto:"));
        const opcionReemplazo = parseInt(prompt("¿Deseas reemplazar el producto existente en esa posición? (1- Sí /2 - NO)"));

        if (posicion >= 0 && posicion <= productos.length && opcionReemplazo === 1) {
          productos.splice(posicion, 1, productoAgregado.trim().toLowerCase());

        } else if (posicion >= 0 && posicion <= productos.length && opcionReemplazo === 2) {
          productos.splice(posicion, 0, productoAgregado.trim().toLowerCase());

        } else {
          alert("Posición inválida. El producto se agregará al final.");
          productos.push(productoAgregado.trim().toLowerCase());
        }
      }

      alert("Producto agregado: " + productoAgregado.trim());
      alert("Lista de productos actualizada: " + productos.join(", "));
      break;
    }

    case 2:

      const productoEliminar = prompt("Escribe el producto a eliminar:\n" + productos.join("\n"));
      const indexEliminar = productos.indexOf(productoEliminar.trim());

      if (indexEliminar !== -1) {
        productos.splice(indexEliminar, 1);
        alert("Producto eliminado: " + productoEliminar.trim());
        alert("Lista de productos actualizada: " + productos.join(", "));

      } else {
        alert("El producto ingresado no se encuentra en la lista.");
      }

      break;

    case 3:

      const productoBuscar = prompt("Escribe el producto a buscar:");
      if (productos.includes(productoBuscar.trim().toLowerCase())) {
        const posicionBuscar = productos.indexOf(productoBuscar.trim().toLowerCase());
        alert("El producto '" + productoBuscar.trim() + "' se encuentra en la posición: " + posicionBuscar);
      } else {
        alert("El producto ingresado no se encuentra en la lista.");
      }

      break;

      case 4:
        mostrarListaProductos(productos);
        break;

    default:
      alert("La opción ingresada no es válida.");
  }
}

function imprimirDescuento(nombreCliente, precio, descuento, precioFinal) {
  console.log("Datos:");
  console.log("Nombre: " + nombreCliente);
  console.log("Precio: $" + precio);
  console.log("Dcto: " + descuento + "%");
  console.log("Total: $" + precioFinal);
}

function imprimirVenta(rut, cantidad, totalPagar) {
  console.log("Datos de cliente:");
  console.log("Rut: " + rut);
  console.log("Productos: " + cantidad);
  console.log("El total a pagar es: $" + totalPagar);
}

function autenticarUsuario(claveCorrecta, maxIntentos, nombreUsuario) {
  let intentos = 0;
  let accesoConcedido = false;

  while (intentos < maxIntentos && !accesoConcedido) {
    let claveIngresada = prompt("Ingresa la clave para acceder (Intento " + (intentos + 1) + "):");
    intentos++;

    if (claveIngresada === claveCorrecta) {
      accesoConcedido = true;

      alert("¡Bienvenide, " + nombreUsuario + "!");
    } else {

      let restantes = maxIntentos - intentos;

      if (restantes > 0) {

        alert("Clave incorrecta. Te quedan " + restantes + " intentos.");

      } else {

        alert("Has excedido el número máximo de intentos.");
      }
    }
  }
  return accesoConcedido;
}



function calcularDescuento(nombreUsuario) {

  let cantidadProductos = parseInt(prompt("¡Perfecto! ¿Cuántos productos deseas calcular?"));

  if (cantidadProductos > 0) {
    for (let i = 1; i <= cantidadProductos; i++) {

      let precio = Number(prompt("Ingresa el precio del producto " + i + ":"));

      let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento (sin %) para el producto " + i + ":"));

      let sPorcentaje = calcularMontoDescuento(precio, descuento);

      let precioFinal = precio - sPorcentaje;

      alert(nombreUsuario + ", el precio con " + descuento + "% de descuento para el producto " + i + " es: $" + precioFinal);

      imprimirDescuento(nombreUsuario, precio, descuento, precioFinal);
    }

  } else {

    alert("Ingresaste una cantidad inválida de productos.");

  }
}

const calcularMontoDescuento = (precioOriginal, porcentajeDcto) => {

  return (porcentajeDcto / 100) * precioOriginal;
};

function registrarVenta(nombreUsuario, precioPolera, precioPantalon, precioZapatillas, precioLentes) {

  const rutCliente = prompt("Ingresa RUT del cliente sin puntos ni guión:");

  let cantidadProductos = 0;
  let subtotal = 0;

  while (confirm("¿Agregar productos?")) {

    let codigoProducto = parseInt(prompt("Ingresa el código del producto: (1) Polera (2) Pantalón (3) Zapatillas (4) Lentes"));

    let precio = 0;

    switch (codigoProducto) {
      case 1:
        precio = precioPolera;
        break;

      case 2:
        precio = precioPantalon;

        break;
      case 3:
        precio = precioZapatillas;
        break;

      case 4:
        precio = precioLentes;
        break;
      default:

        alert("Código de producto inválido.");
    }

    if (precio > 0) {
      cantidadProductos++;
      subtotal = subtotal + precio;
      alert("Producto agregado. Subtotal actual: $" + subtotal);
    }
  }

  alert("Gracias " + nombreUsuario + ". El total a pagar es: $" + subtotal);
  imprimirVenta(rutCliente, cantidadProductos, subtotal);
}

let acceso = autenticarUsuario(claveSecreta, intentosMaximos, nombre);
if (acceso) {

let opcion = "" ;

while (opcion !== "4") {
opcion = prompt("¿Qué te gustaría hacer? | 1 - Calcular descuento | 2 - Ingresar a caja | 3 - Gestionar productos | 4 - Salir del sistema");
  switch (opcion) {
    case "1":
      if (acceso) {

  calcularDescuento(nombre);
  break;
}
case "2":
  if (acceso) {
  registrarVenta(nombre, precioPolera, precioPantalon, precioZapatillas, precioLentes);
  }
  break;
case "3":
if (acceso) {
  gestionarProductos(productos);
}
break;
case "4":
  alert("¡Gracias por usar el sistema! Hasta luego.");
  break;

default:
  alert("Opción inválida. Por favor, ingresa una opción válida.");
}
}
} else {
  alert("No se pudo acceder al sistema. Intenta nuevamente más tarde.");
}