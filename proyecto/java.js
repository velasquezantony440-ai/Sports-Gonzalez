function mostrarSeccion(id) {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("quienes").style.display = "none";
    document.getElementById("productos").style.display = "none";
    document.getElementById("contacto").style.display = "none";

    document.getElementById("camisas").style.display = "none";
    document.getElementById("shorts").style.display = "none";
    document.getElementById("sueteres").style.display = "none";

    document.getElementById(id).style.display = "block";
}

let carrito = [];

function mostrarVentana(id) {

    document.getElementById("camisas").style.display = "none";
    document.getElementById("shorts").style.display = "none";
    document.getElementById("sueteres").style.display = "none";

    document.getElementById(id).style.display = "block";
}

function volver() {

    document.getElementById("camisas").style.display = "none";
    document.getElementById("shorts").style.display = "none";
    document.getElementById("sueteres").style.display = "none";
}

function agregarAlCarrito(btn) {

    let producto = btn.parentElement;

    let nombre = producto.querySelector("h3").innerText;
    let precio = parseFloat(producto.dataset.precio);
    let cantidad = parseInt(producto.querySelector("input").value);

    carrito.push({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    });

    console.log(carrito);

    actualizarCarrito();

    alert(nombre + " agregado al carrito");
}

function actualizarCarrito() {

    let cont = document.getElementById("items-carrito");

    cont.innerHTML = "";

    let total = 0;

    carrito.forEach((item, i) => {

        let subtotal = item.precio * item.cantidad;

        total += subtotal;

        cont.innerHTML += `
            <div>
                ${item.nombre} - Q${item.precio} x ${item.cantidad} = Q${subtotal}
                <button onclick="eliminarItem(${i})">X</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
}

function abrirCarrito() {

    let carrito = document.getElementById("carrito");

    if (carrito.style.display == "block") {

        carrito.style.display = "none";

    } else {

        carrito.style.display = "block";
    }
}

function eliminarItem(i) {

    carrito.splice(i, 1);

    actualizarCarrito();
}

function vaciarCarrito() {

    carrito = [];

    actualizarCarrito();
}