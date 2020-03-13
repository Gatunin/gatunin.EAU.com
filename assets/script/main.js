//Evento para volver al Index
document.querySelector(".tittle").addEventListener("click", function () {
    let imagenesindex = document.querySelectorAll(".imageindex");

    imagenesindex.forEach(function (imagen) {

        imagen.classList.remove("bounceIn");
        imagen.classList.remove("animated");

        imagen.classList.add("bounceOut");
        imagen.classList.add("animated");

    })

    setTimeout(function () {
        location.href = "index.html"
    }, 3000);
});