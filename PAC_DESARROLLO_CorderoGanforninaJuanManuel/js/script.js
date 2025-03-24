document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío por defecto

        // Obtener los valores del formulario
        const nombre = document.getElementById("name").value.trim();
        const apellidos = document.getElementById("surname").value.trim();
        const fechaLugar = document.getElementById("date_spot").value;
        const cantidad = document.getElementById("cantidad").value;
		const categoria = document.getElementById("categoria").value;
        const metodoPago = document.querySelector('input[name="pago"]:checked');

        // Validación de campos vacíos
        if (nombre === "" || apellidos === "" || !metodoPago) {
            alert("Por favor, complete todos los campos antes de continuar.");
            return;
        }

        // Guardar datos en sessionStorage
        sessionStorage.setItem("nombre", nombre);
        sessionStorage.setItem("apellidos", apellidos);
        sessionStorage.setItem("fechaLugar", fechaLugar);
        sessionStorage.setItem("cantidad", cantidad);
		sessionStorage.setItem("categoria", categoria);
        sessionStorage.setItem("metodoPago", metodoPago.value);

        // Redirigir a la página de confirmación
        window.location.href = "confirmacion.html";
    });
});