let precioProducto1 = parseInt(prompt("Indique el precio del Producto 1:"));
let precioProducto2 = parseInt(prompt("Indique el precio del Producto 2:"));
let precioProducto3 = parseInt(prompt("Indique el precio del Producto 3:"));

let costoTotal = 0;

if (precioProducto1) {
    costoTotal += precioProducto1;
}

if (precioProducto2) {
    costoTotal += precioProducto2;
}

if (precioProducto3) {
    costoTotal += precioProducto3;
}

console.log("El costo total es: $" + costoTotal);
alert("El costo total es: $" + costoTotal);



