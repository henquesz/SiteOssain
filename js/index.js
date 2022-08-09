$(window).on('load', function() {
    var images = document.getElementById("images");
    var navbar = document.getElementById("navbar");
    var text = document.getElementById("text");

    var bolhas = document.getElementById("bolhas");

    var screenSize = screen.width;

    if(screenSize < 1024) {
        bolhas.classList.remove("col-3");
        bolhas.classList.add("col-12");

        text.classList.remove("col-6");
        text.classList.add("col-12");

        navbar.classList.add("justify-content-center");
    }
})