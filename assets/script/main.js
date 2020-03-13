let logoInicio = document.querySelector(".tittle");

logoInicio.addEventListener("click", function () {
    let imagenesindex = document.querySelectorAll(".imageindex");

    imagenesindex.forEach(function (imagen) {

        imagen.classList.remove("animated");
        imagen.classList.remove("bounceInDown");

        imagen.classList.add("animated");
        imagen.classList.add("bounceOutDown");
    })

    location.href = "index.html"
});