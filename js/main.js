
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


alert("Calcular total de compra");

function calcularTotal() {
  let total = 0;
  const numProductos = 3;

  for (let i = 1; i <= numProductos; i++) {
    let precioProducto = parseInt(prompt("Ingrese el precio de la Cruz " + i + ":"));

    if (precioProducto) {
      total += precioProducto;
    } else {
      i--; 
    }
  }

  alert("Tu total: $" + total);
  console.log("Tu total: $" + total);
}

calcularTotal();


