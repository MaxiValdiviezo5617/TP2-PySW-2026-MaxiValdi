document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".formulario");
    const spinner = document.querySelector(".spinner");
    const modal = document.getElementById("modal");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Mostrar spinner
        spinner.style.display = "block";

        // Simular envío
        setTimeout(function () {
            spinner.style.display = "none";
            modal.style.display = "flex";
                form.reset();
        }, 1500);
    });

});

// Función global para cerrar modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}