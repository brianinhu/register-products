const trunk = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789";
codeGenerate = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += trunk.charAt(Math.floor(Math.random() * trunk.length));
    }
    return result;
}

/* 
inputCode = (boolean) => {
    const code = codeGenerate(3);
    document.getElementById("txtcodigo").value = code;
}

inputCode(true); */

var btnagregar = document.getElementById("btn-agregar");
btnagregar.addEventListener("click", () => {

    let nombre = document.getElementById("txtnombre").value;
    let descripcion = document.getElementById("txtdesc").value;
    let precio = document.getElementById("txtprecio").value;
    let stock = document.getElementById("txtstock").value;

    if (nombre === "" || descripcion === "" || precio === "" || precio <= 0 || stock <= 0) {

        if (nombre === "") {
            document.getElementById("alertanombre").innerHTML = "(Campo obligatorio)";
        } else {
            document.getElementById("alertanombre").innerHTML = "";
        }

        if (descripcion === "") {
            document.getElementById("alertadesc").innerHTML = "(Campo obligatorio)";
        } else {
            document.getElementById("alertadesc").innerHTML = "";
        }

        if (precio === "") {
            document.getElementById("alertaprecio").innerHTML = "(Ingrese un número)";
        } else {
            if (precio <= 0 || isNaN(precio)) {
                document.getElementById("alertaprecio").innerHTML = "(Ingrese un precio válido)";
            } else {
                document.getElementById("alertaprecio").innerHTML = "";
            }
        }

        if (stock <= 0) {
            document.getElementById("alertastock").innerHTML = "(Ingrese un número válido)";
        } else {
            document.getElementById("alertastock").innerHTML = "";
        }

    } else {
        let codigo = nombre.charAt(0)+nombre.charAt(1)+codeGenerate(5)+descripcion.charAt(0)+descripcion.charAt(1);

        document.getElementById("alertanombre").innerHTML = "";
        document.getElementById("alertadesc").innerHTML = "";
        document.getElementById("alertaprecio").innerHTML = "";
        document.getElementById("alertastock").innerHTML = "";

        const fila = document.createElement('tr');

        /* Agregamos contenido a las filas creadas */
        fila.innerHTML = `
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${descripcion}</td>
        <td>${precio}</td>
        <td>${stock}</td>
        `
        /* Agrega las filas como nodos hijos del cuerpotabla */
        cuerpotabla.appendChild(fila);
    }
});

var btnlimpiar = document.getElementById("btn-limpiar");
btnlimpiar.addEventListener("click", () => {

    /* Crea un nuevo codigo */
    inputCode(true);

    /* Limpia los input´s*/
    document.getElementById("txtnombre").value = "";
    document.getElementById("txtdesc").value = "";
    document.getElementById("txtprecio").value = "";
    document.getElementById("txtstock").value = 1;

    /* Limpia el cuerpo de la tabla*/
    document.getElementById("cuerpotabla").innerHTML = "";
});

var btnlimpiarregistro = document.getElementById("btn-limpiarregistro");
btnlimpiarregistro.addEventListener("click", () => {

    /* Crea un nuevo codigo */
    inputCode(true);

    /* Limpia los input´s*/
    document.getElementById("txtnombre").value = "";
    document.getElementById("txtdesc").value = "";
    document.getElementById("txtprecio").value = "";
    document.getElementById("txtstock").value = 1;
});

var btnlimpiartabla = document.getElementById("btn-limpiartabla");
btnlimpiartabla.addEventListener("click", () => {

    /* Limpia el cuerpo de la tabla*/
    document.getElementById("cuerpotabla").innerHTML = "";
});