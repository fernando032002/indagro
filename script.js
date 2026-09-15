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
   ELEMENTOS DE PRODUCTOS
========================= */

const cards =
    document.querySelectorAll(".card");

const serviceDetail =
    document.getElementById("serviceDetail");

const serviceTitle =
    document.getElementById("serviceTitle");

const serviceDescription =
    document.getElementById("serviceDescription");

const serviceImage =
    document.getElementById("serviceImage");

const serviceText =
    document.getElementById("serviceText");

const productGallery =
    document.getElementById("productGallery");

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

        imagenPrincipal:
            "img/control1.jpeg",

        imagenes: [
            "img/control1.jpeg",
            "img/control2.jpeg",
            "img/control3.jpeg"
        ],

        informacion:
            "Contamos con soluciones para su control eléctrico, venta de equipos y componentes, instalación y mantenimiento."

    },


    potencia: {

        titulo: "POTENCIA ELÉCTRICA",

        descripcion:
            "Servicios relacionados con sistemas de potencia eléctrica.",

        imagenPrincipal:
            "img/potencia1.jpeg",

        imagenes: [
            "img/potencia1.jpeg",
            "img/potencia2.jpeg",
            "img/potencia3.jpeg",
            "img/potencia4.jpeg"
        ],

        informacion:
            "Ofrecemos soluciones para sistemas de potencia eléctrica, equipos eléctricos y aplicaciones industriales."

    },


    hidraulica: {

        titulo: "HIDRÁULICA",

        descripcion:
            "Soluciones y servicios especializados en sistemas hidráulicos.",

        imagenPrincipal:
            "img/hidraulica.jpg",

        imagenes: [
            "img/hidraulica.jpg",
            "img/hidraulica2.jpg",
            "img/hidraulica3.jpg"
        ],

        informacion:
            "Trabajamos con sistemas hidráulicos, equipos, componentes y soluciones."

    },


    automatizacion: {

        titulo: "AUTOMATIZACIÓN",

        descripcion:
            "Implementación y mejora de sistemas automatizados.",

        imagenPrincipal:
            "img/automatizacion1.jpeg",

        imagenes: [
            "img/automatizacion1.jpeg",
            "img/automatizacion2.jpeg",
            "img/automatizacion3.jpg"
        ],

        informacion:
            "Desarrollamos soluciones de automatización para mejorar el funcionamiento, control y eficiencia de los procesos."

    },


    neumatica: {

        titulo: "NEUMÁTICA",

        descripcion:
            "Soluciones para sistemas y equipos neumáticos.",

        imagenPrincipal:
            "img/neumatica.jpg",

        imagenes: [
            "img/neumatica.jpg",
            "img/neumatica2.jpg",
            "img/neumatica3.jpg"
        ],

        informacion:
            "Ofrecemos soluciones para sistemas neumáticos, equipos, componentes y aplicaciones industriales."

    }

};


/* =========================
   MOSTRAR DETALLE DEL PRODUCTO
========================= */

if (
    cards.length > 0 &&
    serviceDetail &&
    serviceTitle &&
    serviceDescription &&
    serviceImage &&
    serviceText &&
    productGallery
) {

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const servicioSeleccionado =
                card.dataset.servicio;

            const servicio =
                servicios[servicioSeleccionado];


            // Verificar que exista el producto

            if (!servicio) {

                console.error(
                    "No existe información para:",
                    servicioSeleccionado
                );

                return;

            }


            /* =========================
               INFORMACIÓN
            ========================= */

            serviceTitle.textContent =
                servicio.titulo;

            serviceDescription.textContent =
                servicio.descripcion;

            serviceText.textContent =
                servicio.informacion;


            /* =========================
               IMAGEN PRINCIPAL
            ========================= */

            serviceImage.src =
                servicio.imagenPrincipal;

            serviceImage.alt =
                servicio.titulo;


            /* =========================
               LIMPIAR GALERÍA
            ========================= */

            productGallery.innerHTML = "";


            /* =========================
               CREAR GALERÍA
            ========================= */

            servicio.imagenes.forEach(
                (imagen, indice) => {

                    const miniatura =
                        document.createElement("img");


                    miniatura.src =
                        imagen;


                    miniatura.alt =
                        `${servicio.titulo} imagen ${indice + 1}`;


                    miniatura.classList.add(
                        "gallery-image"
                    );


                    /* Primera imagen seleccionada */

                    if (indice === 0) {

                        miniatura.classList.add(
                            "selected"
                        );

                    }


                    /* =========================
                       CAMBIAR IMAGEN PRINCIPAL
                    ========================= */

                    miniatura.addEventListener(
                        "click",
                        () => {

                            serviceImage.src =
                                imagen;


                            const miniaturas =
                                productGallery.querySelectorAll(
                                    ".gallery-image"
                                );


                            miniaturas.forEach(
                                img => {

                                    img.classList.remove(
                                        "selected"
                                    );

                                }
                            );


                            miniatura.classList.add(
                                "selected"
                            );

                        }
                    );


                    productGallery.appendChild(
                        miniatura
                    );

                }
            );


            /* =========================
               MOSTRAR DETALLE
            ========================= */

            serviceDetail.style.display =
                "block";


            /* =========================
               DESPLAZARSE AL DETALLE
            ========================= */

            setTimeout(() => {

                serviceDetail.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }, 100);

        });

    });

}


/* =========================
   REGRESAR A PRODUCTOS
========================= */

if (
    backServices &&
    serviceDetail
) {

    backServices.addEventListener(
        "click",
        () => {

            serviceDetail.style.display =
                "none";


            const servicesSection =
                document.getElementById(
                    "servicios"
                );


            if (servicesSection) {

                servicesSection.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }
    );

}


/* =========================
   CARRUSEL NOSOTROS
========================= */

const imagenesNosotros =
    document.querySelectorAll(
        ".carousel-image"
    );

const botonAnterior =
    document.getElementById(
        "prevAbout"
    );

const botonSiguiente =
    document.getElementById(
        "nextAbout"
    );


let indiceNosotros = 0;


/* =========================
   MOSTRAR IMAGEN
========================= */

function mostrarImagenNosotros(indice) {

    imagenesNosotros.forEach(
        imagen => {

            imagen.classList.remove(
                "active"
            );

        }
    );


    if (imagenesNosotros[indice]) {

        imagenesNosotros[indice]
            .classList.add("active");

    }

}


/* =========================
   SIGUIENTE
========================= */

if (botonSiguiente) {

    botonSiguiente.addEventListener(
        "click",
        () => {

            indiceNosotros++;


            if (
                indiceNosotros >=
                imagenesNosotros.length
            ) {

                indiceNosotros = 0;

            }


            mostrarImagenNosotros(
                indiceNosotros
            );

        }
    );

}


/* =========================
   ANTERIOR
========================= */

if (botonAnterior) {

    botonAnterior.addEventListener(
        "click",
        () => {

            indiceNosotros--;


            if (indiceNosotros < 0) {

                indiceNosotros =
                    imagenesNosotros.length - 1;

            }


            mostrarImagenNosotros(
                indiceNosotros
            );

        }
    );

}


/* =========================
   CAMBIO AUTOMÁTICO
========================= */

if (
    imagenesNosotros.length > 0
) {

    setInterval(() => {

        indiceNosotros++;


        if (
            indiceNosotros >=
            imagenesNosotros.length
        ) {

            indiceNosotros = 0;

        }


        mostrarImagenNosotros(
            indiceNosotros
        );

    }, 5000);

}
