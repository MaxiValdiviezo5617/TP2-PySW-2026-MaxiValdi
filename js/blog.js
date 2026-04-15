document.addEventListener("DOMContentLoaded", function () {

    const elementos = document.querySelectorAll(".reveal");

    function mostrarElementos() {
        elementos.forEach(el => {
            const top = el.getBoundingClientRect().top;
            const visible = window.innerHeight - 100;

            if (top < visible) {
                el.classList.add("activo");
            }
        });
    }

    // Ejecutar al cargar
    mostrarElementos();

    // Ejecutar al hacer scroll
    window.addEventListener("scroll", mostrarElementos);

});