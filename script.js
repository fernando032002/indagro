/* =========================
   MENÚ MÓVIL
========================= */

const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector(".nav");


if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


/* =========================
   CERRAR MENÚ
========================= */

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

    });

});

/* =========================
   SERVICIOS
========================= */

const cards = document.querySelectorAll(".card");

const serviceDetail =
    document.getElementById("serviceDetail");

const serviceTitle =
    document.getElementById("serviceTitle");

const serviceDescription =
    document.getElementById("serviceDescription");

const serviceText =
    document.getElementById("serviceText");

const serviceImage =
    document.getElementById("serviceImage");

const backServices =
    document.getElementById("backServices");


/* =========================
   INFORMACIÓN DE PRODUCTOS
========================= */

const servicios = {

    control: {

        titulo: "CONTROL ELÉCTRICO",

        descripcion:
            "Soluciones para el control y manejo de sistemas eléctricos.",

        imagen:
            "img/control.jpg",

        informacion:
            "."

    },


    potencia: {

        titulo: "POTENCIA ELÉCTRICA",

        descripcion:
            "Servicios relacionados con sistemas de potencia eléctrica.",

        imagen:
            "img/potencia.jpg",

        informacion:
            "."
    },


    hidraulica: {

        titulo: "HIDRÁULICA",

        descripcion:
            "Soluciones y servicios especializados en sistemas hidráulicos.",

        imagen:
            "img/hidraulica.jpg",

        informacion:
            "."

    },


    automatizacion: {

        titulo: "AUTOMATIZACIÓN",

        descripcion:
            "Implementación y mejora de sistemas automatizados.",

        imagen:
            "img/automatizacion.jpg",

        informacion:
            "."

    },


    neumatica: {

        titulo: "NEUMÁTICA",

        descripcion:
            "Soluciones para sistemas y equipos neumáticos.",

        imagen:
            "img/neumatica.jpg",

        informacion:
            "."

    }

};


/* =========================
   CLIC EN PRODUCTO
========================= */

cards.forEach(card => {

    card.addEventListener("click", () => {

        const servicioSeleccionado =
            card.dataset.servicio;

        const servicio =
            servicios[servicioSeleccionado];


        if (!servicio) {
            return;
        }


        /* TÍTULO */

        serviceTitle.textContent =
            servicio.titulo;


        /* DESCRIPCIÓN */

        serviceDescription.textContent =
            servicio.descripcion;


        /* INFORMACIÓN */

        serviceText.textContent =
            servicio.informacion;


        /* IMAGEN */

        serviceImage.src =
            servicio.imagen;

        serviceImage.alt =
            servicio.titulo;


        /* MOSTRAR INFORMACIÓN */

        serviceDetail.style.display =
            "block";


        /* DESPLAZAR HACIA LA INFORMACIÓN */

        setTimeout(() => {

            serviceDetail.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }, 100);

    });

});


/* =========================
   REGRESAR A PRODUCTOS
========================= */

if (backServices) {

    backServices.addEventListener("click", () => {

        serviceDetail.style.display =
            "none";


        document.getElementById("servicios")
            .scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

    });

}


/* =========================
   CARRUSEL NOSOTROS
========================= */

const imagenesNosotros =
    document.querySelectorAll(".carousel-image");

const botonAnterior =
    document.getElementById("prevAbout");

const botonSiguiente =
    document.getElementById("nextAbout");

let indiceNosotros = 0;


/* =========================
   MOSTRAR IMAGEN
========================= */

function mostrarImagenNosotros(indice) {

    imagenesNosotros.forEach(imagen => {

        imagen.classList.remove("active");

    });


    if (imagenesNosotros[indice]) {

        imagenesNosotros[indice]
            .classList.add("active");

    }

}


/* =========================
   SIGUIENTE
========================= */

if (botonSiguiente) {

    botonSiguiente.addEventListener("click", () => {

        indiceNosotros++;


        if (
            indiceNosotros >=
            imagenesNosotros.length
        ) {

            indiceNosotros = 0;

        }


        mostrarImagenNosotros(indiceNosotros);

    });

}


/* =========================
   ANTERIOR
========================= */

if (botonAnterior) {

    botonAnterior.addEventListener("click", () => {

        indiceNosotros--;


        if (indiceNosotros < 0) {

            indiceNosotros =
                imagenesNosotros.length - 1;

        }


        mostrarImagenNosotros(indiceNosotros);

    });

}


/* =========================
   CAMBIO AUTOMÁTICO
========================= */

if (imagenesNosotros.length > 0) {

    setInterval(() => {

        indiceNosotros++;


        if (
            indiceNosotros >=
            imagenesNosotros.length
        ) {

            indiceNosotros = 0;

        }


        mostrarImagenNosotros(indiceNosotros);

    }, 5000);

}
