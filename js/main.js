console.log("Viora Sunglasses - Sistema de Gestión de anteojos y Ventas");

const nombreUsuario = prompt("¡Hola! Ingresa tu nombre para comenzar:");
const claveSecreta = "js123";
const intentosMaximos = 3;
let total = 0;

const pesoArg = 1.58;

class anteojo {
  static codigoBarra = 0;
  constructor(modelo, material, precio, stock, talla, color, cristal, forma) {
    this.id = ++anteojo.codigoBarra;
    this.modelo = modelo;
    this.material = material;
    this.precio = precio;
    this.stock = stock;
    this.talla = talla;
    this.color = color;
    this.cristal = cristal;
    this.forma = forma;
  }
  enPesosArg = () => {
    this.precio = this.precio * pesoArg;
    console.log("El precio de ${this.material} en pesos Argentinos es: $${this.precio}");
  }
}
const anteojo1 = new anteojo ("Astro", "Acetato", 25000, 10, "M", "Negro", "Estandar", "Ovalado");
 const anteojo2 = new anteojo ("Styles", "Acetato", 40000, 5, "L", "Tortoise", "estandar", "Rectangular");
const anteojo3 = new anteojo ("Devon", "Metal", 60000, 8, "42", "Blanco", "Polarizado", "Ovalado");

const listaAnteojos = [anteojo1, anteojo2, anteojo3];

function mostrarListaAnteojos(listaAnteojos) {
  const mostrar= listaAnteojos.map((anteojo) => anteojo.modelo + ", Stock: " + anteojo.stock + "\n").join("");
  alert(listaAnteojos.length + " Anteojos disponibles: \n" + mostrar)
}

const cargarAnteojo = (listaAnteojos) => {
  const modelo = prompt("Ingresa el nombre del modelo del anteojo:");
  const material = prompt("Ingresa el material de anteojo:");
  const precio = parseFloat(prompt("Ingresa el precio del anteojo:"));
  const stock = parseInt(prompt("Ingresa la cantidad en stock:"));
  const talla = prompt("Ingresa la talla del anteojo:");
  const color = prompt("Ingresa el color del anteojo:");
  const cristal = prompt("Ingresa el tipo de cristal del anteojo:");
  const forma = prompt("Ingresa la forma del anteojo:");
  const nuevoAnteojo = new anteojo(modelo, material, precio, stock, talla, color, cristal, forma);
  const ubicacion = Number(prompt("¿Dónde deseas agregarlo? | 1 - Al inicio | 2 - Al final | 3 - En una posición específica"));

  if (ubicacion === 1) {
    listaAnteojos.unshift(nuevoAnteojo);
  } else if (ubicacion === 2) {
    listaAnteojos.push(nuevoAnteojo);
  } else if (ubicacion === 3) {
    const posicion = Number(prompt("Ingresa la posición (0 a " + listaAnteojos.length + ") donde deseas agregar el anteojo:"));
    const opcionReemplazo = parseInt(prompt("¿Deseas reemplazar el anteojo existente en esa posición? (1- Sí / 2 - NO)"));

    if (posicion >= 0 && posicion <= listaAnteojos.length && opcionReemplazo === 1) {
      listaAnteojos.splice(posicion, 1, nuevoAnteojo);
    } else if (posicion >= 0 && posicion <= listaAnteojos.length && opcionReemplazo === 2) {
      listaAnteojos.splice(posicion, 0, nuevoAnteojo);
    } else {
      alert("Posición inválida. El anteojo se agregará al final.");
      listaAnteojos.push(nuevoAnteojo);
    }
  }

  alert("anteojo cargado:\nID: " + nuevoAnteojo.id + "\nModelo: " + nuevoAnteojo.modelo + "\nMaterial: " + nuevoAnteojo.material + "\nPrecio: $" + nuevoAnteojo.precio + "\nStock: " + nuevoAnteojo.stock + "\nTalla: " + nuevoAnteojo.talla + "\nColor: " + nuevoAnteojo.color + "\nCristal: " + nuevoAnteojo.cristal + "\nForma: " + nuevoAnteojo.forma);
  alert("Lista de anteojos actualizada ");
}

function eliminaranteojo(anteojos) {
  const nombresModelos = anteojos.map((item) => item.modelo);
  const anteojoEliminar = prompt("Escribe el modelo del anteojo a eliminar:\n" + nombresModelos.join("\n"));
  if (!anteojoEliminar) return;

  const termino = anteojoEliminar.trim().toLowerCase();
  const indexEliminar = anteojos.findIndex(
    (item) => item.modelo.toLowerCase() === termino
  );

  if (indexEliminar !== -1) {
    const eliminado = anteojos.splice(indexEliminar, 1);
    alert("Anteojo eliminado: " + eliminado[0].modelo);
    alert("Lista de anteojos actualizada: " + anteojos.map((item) => item.modelo).join(", "));
  } else {
    alert("El anteojo ingresado no se encuentra en la lista.");
  }
}

function buscaranteojo(anteojos) {
  const anteojoBuscar = prompt("Escribe el modelo del anteojo a buscar:");
  if (!anteojoBuscar) return;

  const termino = anteojoBuscar.trim().toLowerCase();
  const posicionBuscar = anteojos.findIndex(
    (item) => item.modelo.toLowerCase() === termino
  );

  if (posicionBuscar !== -1) {
    alert("El anteojo '" + anteojoBuscar.trim() + "' se encuentra en la posición: " + posicionBuscar);
  } else {
    alert("El anteojo ingresado no se encuentra en la lista.");
  }
}

function gestionarAnteojos(anteojos) {
  const opcionGestion = Number(prompt("¿Qué deseas hacer? | 1 - Agregar anteojo | 2 - Eliminar anteojo | 3 - Buscar anteojo | 4 - Ver lista de anteojos"));

  switch (opcionGestion) {
    case 1:
      cargarAnteojo(anteojos);
      break;
    case 2:
      eliminaranteojo(anteojos);
      break;
    case 3:
      buscaranteojo(anteojos);
      break;
    case 4:
      mostrarListaAnteojos(anteojos);
      break;
    default:
      alert("La opción ingresada no es válida.");
  }
}

function imprimirDescuento(nombreCliente, precio, descuento, precioFinal) {
  console.log("Datos:");
  console.log("Nombre: " + nombreCliente);
  console.log("Precio: $" + precio);
  console.log("Dcto: $" + descuento);
  console.log("Total: $" + precioFinal);
}

function imprimirVenta(rut, cantidad, totalPagar, subtotal, nombreUsuario, carrito) {
  console.log("Datos de cliente:");
  console.log("Rut: " + rut);
  console.log("anteojos: " + cantidad);
  console.log("El total a pagar es: $" + totalPagar);
  alert("Gracias " + nombreUsuario + ". El total a pagar es: $" + subtotal);
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
  const seleccion = [];

  while (confirm("¿Agregar anteojos para simular descuento?")) {
    const listaCodigos = listaAnteojos.map(
      (anteojo) => anteojo.id + " - " + anteojo.modelo + " (" + anteojo.material + ") - $" + anteojo.precio
    );
    const codigoIngresado = parseInt(
      prompt("Escribe el código del anteojo:\n" + listaCodigos.join("\n"))
    );
    const anteojoEncontrado = listaAnteojos.find(
      (anteojo) => anteojo.id === codigoIngresado
    );

    if (anteojoEncontrado) {
      seleccion.push(anteojoEncontrado);
      alert("Agregado: " + anteojoEncontrado.modelo);
    } else {
      alert("Código de anteojo inválido.");
    }
  }

  if (seleccion.length === 0) {
    alert("No seleccionaste anteojos para calcular descuento.");
    return;
  }

  let totalOriginal = 0;
  let totalDescuento = 0;

  for (let i = 0; i < seleccion.length; i++) {
    const item = seleccion[i];
    totalOriginal = totalOriginal + item.precio;

    const mismosModelos = seleccion.filter(
      (prod) => prod.modelo.toLowerCase() === item.modelo.toLowerCase()
    );
    const mismosMateriales = seleccion.filter(
      (prod) => prod.material.toLowerCase() === item.material.toLowerCase()
    );

    let porcentaje = 0;
    if (mismosModelos.length >= 2) {
      porcentaje = 15;
    } else if (mismosMateriales.length >= 2) {
      porcentaje = 10;
    }

    if (porcentaje > 0) {
      totalDescuento = totalDescuento + calcularMontoDescuento(item.precio, porcentaje);
    }
  }

  const precioFinal = totalOriginal - totalDescuento;
  alert(
    nombreUsuario + ", subtotal: $" + totalOriginal +" | Descuento: $" + totalDescuento + " | Total con descuento: $" + precioFinal
  );
  imprimirDescuento(nombreUsuario, totalOriginal, totalDescuento, precioFinal);
}


const calcularMontoDescuento = (precioOriginal, porcentajeDcto) => {
  return (porcentajeDcto / 100) * precioOriginal;
};

function registrarVenta(listaAnteojos) {
  const rutCliente = prompt("Ingresa RUT del cliente sin puntos ni guión:");
  const carrito = [];
  let cantidadanteojos = 0;
  let subtotal = 0;

  while (confirm("¿Agregar anteojos?")) {
  const listaCodigos = listaAnteojos.map((anteojo) => anteojo.id + " - "+ anteojo.modelo + " ($" + anteojo.precio + ")");
  const codigoIngresado = parseInt(prompt("Escribe el código del anteojo:\n" + listaCodigos.join("\n")));
  const anteojoEncontrado = listaAnteojos.find((anteojo) => anteojo.id === codigoIngresado);

  if (anteojoEncontrado && anteojoEncontrado.stock > 0) {

    carrito.push(anteojoEncontrado)
    anteojoEncontrado.stock = anteojoEncontrado.stock -1
    cantidadanteojos= carrito.length

    subtotal = carrito.reduce((acumulador, item) => acumulador + item.precio, 0);

    alert("Anteojo agregado: " + anteojoEncontrado.modelo + ". Subtotal actual: $" + subtotal);
  } else if (anteojoEncontrado && anteojoEncontrado.stock === 0) {
    alert("El codigo seleccionado no tiene stock")
    
  }else {
    alert("Código de anteojo inválido.");
  }

}

imprimirVenta(rutCliente, cantidadanteojos, subtotal, subtotal, nombreUsuario, carrito);
}

let acceso = autenticarUsuario(claveSecreta, intentosMaximos, nombreUsuario);

if (acceso) {
  let opcion = "";

  while (opcion !== "4") {
    opcion = prompt("¿Qué te gustaría hacer? | 1 - Calcular descuento | 2 - Ingresar a caja | 3 - Gestionar anteojos | 4 - Salir del sistema");
    switch (opcion) {
      case "1":
        calcularDescuento(nombreUsuario);
        break;
      case "2":
        registrarVenta(listaAnteojos);
        break;
      case "3":
        gestionarAnteojos(listaAnteojos);
        break;
      case "4":
        alert("¡Gracias por usar el sistema! Hasta luego.");
        break;
      default:;

        alert("Opción inválida. Por favor, ingresa una opción válida.");
    }
  }
} else {
  alert("No se pudo acceder al sistema. Intenta nuevamente más tarde.");
}