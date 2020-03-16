//Evento inicio de web
    onload = cambiarImagenes();

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
        location.href = "index.html";
        cambiarImagenes();
    }, 3000);
});

//cargar imagenes aleatorias en el menu
function cambiarImagenes() {  

    var arrayimagenesbatalla = new Array();
    arrayimagenesbatalla[0] = "./assets/images/batallaindex.jpg";
    arrayimagenesbatalla[1] = "./assets/images/batallaindex2.jpg";
    arrayimagenesbatalla[2] = "./assets/images/batallaindex3.jpg";
    arrayimagenesbatalla[3] = "./assets/images/batallaindex4.jpg"; 
    arrayimagenesbatalla[4] = "./assets/images/batallaindex5.jpg"; 
    arrayimagenesbatalla[5] = "./assets/images/batallaindex6.jpg"; 

    var arrayimagenesviaje = new Array();
    arrayimagenesviaje[0] = "./assets/images/travelindex.jpg";
    arrayimagenesviaje[1] = "./assets/images/travelindex2.jpg";
    arrayimagenesviaje[2] = "./assets/images/travelindex3.jpg";
    arrayimagenesviaje[3] = "./assets/images/travelindex4.jpg";
    arrayimagenesviaje[4] = "./assets/images/travelindex5.jpg";
    
    var arrayimagenescomunidad = new Array();
    arrayimagenescomunidad[0] = "./assets/images/fasecomunidadindex.jpg";
    arrayimagenescomunidad[1] = "./assets/images/fasecomunidadindex2.jpg";
    arrayimagenescomunidad[2] = "./assets/images/fasecomunidadindex3.jpg";
    arrayimagenescomunidad[3] = "./assets/images/fasecomunidadindex4.jpg";
    arrayimagenescomunidad[4] = "./assets/images/fasecomunidadindex.jpg";

    var imagenBatallaAleatoria = ObtenerimagenAletaria(arrayimagenesbatalla, arrayimagenesbatalla.length);
    var imagenViajeAleatoria = ObtenerimagenAletaria(arrayimagenesviaje, arrayimagenesviaje.length);
    var imagenComunidadAleatoria = ObtenerimagenAletaria(arrayimagenescomunidad, arrayimagenescomunidad.length);

    document.getElementById("imagenmenubatalla").setAttribute("src", imagenBatallaAleatoria);
    document.getElementById("imagenmenuviaje").setAttribute("src", imagenViajeAleatoria);
    document.getElementById("imagenmenucomunidad").setAttribute("src",imagenComunidadAleatoria);
}

function ObtenerimagenAletaria(arrayimagenes, numeroimagenes)
{
    return arrayimagenes[Math.floor(Math.random() * numeroimagenes)];
}