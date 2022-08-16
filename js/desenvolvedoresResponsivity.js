$(window).on('load', function() {
    if(screen.width < 1024) {
        /* Apagar assets */
        var plantas = document.getElementById("plantas");

        plantas.style.display = "none";

        /* Texto */
        var texto = document.getElementById("texto");

        texto.classList.remove("col-6");
        texto.classList.add("col-12");

        /* Bulbasaur Logotipo */

        var logotipo = document.getElementById("logotipo");

        logotipo.classList.remove("col-6");
        logotipo.classList.add("row", "justify-content-center");
    }

})
