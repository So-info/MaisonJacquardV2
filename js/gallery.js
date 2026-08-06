/*==================================================
MAISON JACQUARD
GALLERY.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeLightbox");

    if (!lightbox || !lightboxImg) return;

    const images = document.querySelectorAll(".gallery-grid img");

    images.forEach(image => {

        image.addEventListener("click", () => {

            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", closeLightbox);

    }

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            closeLightbox();

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeLightbox();

        }

    });

});