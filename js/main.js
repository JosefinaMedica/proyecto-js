
// alert("Calcular total de compra");


// function calcularTotal (){


// let precioProducto1 = parseInt(prompt("Ingrese el precio del Producto 1:"));
// let precioProducto2 = parseInt(prompt("Ingrese el precio del Producto 2:"));
// let precioProducto3 = parseInt(prompt("Ingrese el precio del Producto 3:"));

// let Total = 0;

// if (precioProducto1) {
//     Total += precioProducto1;
// }

// if (precioProducto2) {
//     Total += precioProducto2;
// }

// if (precioProducto3) {
//     Total += precioProducto3;
// }


// alert("Tu total: $" + Total);
// console.log("Tu total: $" + Total);

// }

// calcularTotal ();


// alert("Calcular total de compra");

// function calcularTotal() {
//   let total = 0;
//   const numProductos = 3;

//   for (let i = 1; i <= numProductos; i++) {
//     let precioProducto = parseInt(prompt("Ingrese el precio de la Cruz " + i + ":"));

//     if (precioProducto) {
//       total += precioProducto;
//     } else {
//       i--; 
//     }
//   }

//   alert("Tu total: $" + total);
//   console.log("Tu total: $" + total);
// }

// calcularTotal();



alert("Calcular total de compra");

function calcularTotal() {
  let total = 0;
  const numProductos = 3;
  let productos = [];
  let precios = {};

  for (let i = 1; i <= numProductos; i++) {
    let precioProducto = parseInt(prompt("Ingrese el precio de la Cruz " + i + ":"));

    if (precioProducto) {
      total += precioProducto;
      productos.push({
        nombre: "Cruz " + i,
        precio: precioProducto
      });
      precios["Cruz " + i] = precioProducto;
    } else {
      i--;
    }
  }

  alert("Tu total: $" + total);
  console.log("Tu total: $" + total);
  console.log("Productos: ", productos);
  console.log("Precios: ", precios);


  let nombreProducto = prompt("Ingrese el nombre del producto a buscar:");
  let productoEncontrado = productos.find(producto => producto.nombre === nombreProducto);

  if (productoEncontrado) {
    console.log("Producto encontrado:", productoEncontrado);
  } else {
    console.log("Producto no encontrado");
  }

  let precioFiltro = parseInt(prompt("Ingrese el precio máximo para filtrar los productos:"));
  let productosFiltrados = productos.filter(producto => producto.precio <= precioFiltro);
  console.log("Productos filtrados:", productosFiltrados);
}

calcularTotal();