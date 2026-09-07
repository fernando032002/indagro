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

const backServices =
    document.getElementById("backServices");


/* =========================
   INFORMACIÓN
========================= */

const servicios = {

    control: {

        titulo: "CONTROL ELÉCTRICO",

        descripcion:
            "Soluciones para el control y manejo de sistemas eléctricos.",

        informacion:
            "Aquí puedes colocar la información detallada de los sistemas de control eléctrico que ofrece INDAGRO."

    },


    potencia: {

        titulo: "POTENCIA ELÉCTRICA",

        descripcion:
            "Servicios relacionados con sistemas de potencia eléctrica.",

        informacion:
            "Aquí puedes colocar información sobre instalaciones, mantenimiento y soluciones relacionadas con potencia eléctrica."

    },


    hidraulica: {

        titulo: "HIDRÁULICA",

        descripcion:
            "Soluciones y servicios especializados en sistemas hidráulicos.",

        informacion:
            "Aquí puedes colocar la información detallada sobre los equipos y soluciones hidráulicas que ofrece INDAGRO."

    },


    automatizacion: {

        titulo: "AUTOMATIZACIÓN",

        descripcion:
            "Implementación y mejora de sistemas automatizados.",

        informacion:
            "Aquí puedes colocar información sobre automatización industrial, control de procesos y sistemas automatizados."

    },


    neumatica: {

        titulo: "NEUMÁTICA",

        descripcion:
            "Soluciones para sistemas y equipos neumáticos.",

        informacion:
            "Aquí puedes colocar información sobre sistemas neumáticos, equipos, mantenimiento y soluciones especializadas."

    }

};


/* =========================
   CLIC EN SERVICIO
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


        serviceTitle.textContent =
            servicio.titulo;

        serviceDescription.textContent =
            servicio.descripcion;

        serviceText.textContent =
            servicio.informacion;


        serviceDetail.style.display = "block";


        setTimeout(() => {

            serviceDetail.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }, 100);

    });

});


/* =========================
   REGRESAR A SERVICIOS
========================= */

if (backServices) {

    backServices.addEventListener("click", () => {

        serviceDetail.style.display = "none";


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
