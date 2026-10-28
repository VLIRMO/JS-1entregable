console.log("Sistema de ventas");

const nombre = prompt("¡Hola! Ingresa tu nombre para comenzar:");

let opcion = prompt("¿Qué te gustaría hacer? 1 - Calcular descuento | 2 - Ingresar a caja | 3 gestioar inventario");


let precioPolera = 25000;
let precioPantalon = 40000;
let precioZapatillas = 60000;
let precioLentes = 15000;
const claveSecreta = "js123";
const intentosMaximos = 3;
let total = 0;

const productosEnStock = ["Polera", "Pantalón", "Zapatillas", "Lentes", "Gorro"];

function listarStock(lista) {

  console.log("Stock actual:");

  for (const producto of lista) {

    console.log("Producto: " + producto);
  }

  console.log("Total: " + lista.length + " productos");
}


function gestionarInventario(nombreUsuario) {
  alert("ok, " + nombreUsuario + ", vamos a gestionar el inventario.");


  const nuevo = prompt("Ingresa el producto que quieres agregar al final:");
  if (nuevo) {
    productosEnStock.push(nuevo);
  }

  const destacado = prompt("Ingresa un producto para ponerlo al principio:");
  if (destacado) {
    productosEnStock.unshift(destacado);
  }

  const agotado = productosEnStock.pop();
  alert("Se agotó el último producto: " + agotado);
  console.log("Se eliminó del stock: " + agotado);

  const buscado = prompt("¿Qué producto quieres buscar?");
  if (buscado) {
    const stockMinusculas = productosEnStock.map(p => p.toLowerCase());
    const texto = buscado.toLowerCase();

    if (stockMinusculas.includes(texto)) {
      alert("Sí está en stock, en la posición " + stockMinusculas.indexOf(texto));
    } else {
      alert("Ese producto no está en stock.");
    }
  }

  const indice = parseInt(prompt("¿En qué posición quieres reemplazar un producto? (0 a " + (productosEnStock.length - 1) + ")"));
  if (indice >= 0 && indice < productosEnStock.length) {
    const reemplazo = prompt("Ingresa el nuevo producto:");
    if (reemplazo) {
      productosEnStock.splice(indice, 1, reemplazo);
    }
  } else {
    alert("Posición inválida.");
  }

  listarStock(productosEnStock);

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


function registrarVenta(nombreUsuario, pPolera, pPantalon, pZapatillas, pLentes) {


  const rutCliente = prompt("Ingresa RUT del cliente sin puntos ni guión:");
  let cantidadProductos = 0;
  let subtotal = 0;


  while (confirm("¿Agregar productos?")) {

    let codigoProducto = parseInt(prompt("Ingresa el código del producto: (1) Polera (2) Pantalón (3) Zapatillas (4) Lentes"));

    let precio = 0;



    switch (codigoProducto) {
      case 1:
        precio = pPolera;
        break;

      case 2:
        precio = pPantalon;

        break;
      case 3:
        precio = pZapatillas;
        break;

      case 4:
        precio = pLentes;
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



if (opcion == "1") {
  let acceso = autenticarUsuario(claveSecreta, intentosMaximos, nombre);
  if (acceso) {
    calcularDescuento(nombre);
  }
} else if (opcion == "2") {
  let acceso = autenticarUsuario(claveSecreta, intentosMaximos, nombre);

  if (acceso) {
    registrarVenta(nombre, precioPolera, precioPantalon, precioZapatillas, precioLentes);
  }
} else if (opcion == "3") {
  let acceso = autenticarUsuario(claveSecreta, intentosMaximos, nombre);
  if (acceso) {
    gestionarInventario(nombre);
  }
} else {
  alert("Opción no válida.");
}