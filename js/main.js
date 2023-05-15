
alert("Calcular total de compra");


function calcularTotal (){


let precioProducto1 = parseInt(prompt("Ingrese el precio del Producto 1:"));
let precioProducto2 = parseInt(prompt("Ingrese el precio del Producto 2:"));
let precioProducto3 = parseInt(prompt("Ingrese el precio del Producto 3:"));

let Total = 0;

if (precioProducto1) {
    Total += precioProducto1;
}

if (precioProducto2) {
    Total += precioProducto2;
}

if (precioProducto3) {
    Total += precioProducto3;
}


alert("Tu total: $" + Total);
console.log("Tu total: $" + Total);

}

calcularTotal ();


