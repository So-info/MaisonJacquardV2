/*==================================================
MAISON JACQUARD
main.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    LOADER
    =========================================*/

    const loader = document.getElementById("loader");

    if (loader) {

        window.addEventListener("load", () => {

            setTimeout(() => {

                loader.style.opacity = "0";
                loader.style.pointerEvents = "none";

                setTimeout(() => {

                    loader.remove();

                }, 600);

            }, 1000);

        });

    }

    /*=========================================
    NAVBAR
    =========================================*/

    const header = document.querySelector("header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 80) {

            header.style.background = "rgba(5,5,5,.95)";
            header.style.backdropFilter = "blur(15px)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

        } else {

            header.style.background = "rgba(5,5,5,.60)";
            header.style.boxShadow = "none";

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /*=========================================
    SCROLL REVEAL
    =========================================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section, .card, .gallery img").forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    /*=========================================
    BOUTON HAUT
    =========================================*/

    const topButton = document.createElement("button");

    topButton.id = "topButton";

    topButton.innerHTML = "↑";

    document.body.appendChild(topButton);

    function toggleTopButton() {

        if (window.scrollY > 600) {

            topButton.classList.add("showTop");

        } else {

            topButton.classList.remove("showTop");

        }

    }

    toggleTopButton();

    window.addEventListener("scroll", toggleTopButton);

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=========================================
    HERO PARALLAX
    =========================================*/

    const hero = document.getElementById("hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        hero.style.backgroundPositionY = -(window.scrollY * 0.3) + "px";

    });

    /*=========================================
    EFFET CARTES
    =========================================*/

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(200,165,106,.18), #101010 65%)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background = "#101010";

        });

    });

    /*=========================================
    GALERIE
    =========================================*/

    document.querySelectorAll(".gallery-grid img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.05)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

    /*=========================================
    LIGHTBOX
    =========================================*/

    const lightbox = document.getElementById("lightbox");

    const lightboxImg = document.getElementById("lightboxImg");

    const closeBtn = document.getElementById("closeLightbox");

    if (lightbox && lightboxImg) {

        document.querySelectorAll(".gallery-grid img").forEach(img => {

            img.addEventListener("click", () => {

                lightbox.classList.add("active");

                lightboxImg.src = img.src;

            });

        });

        if (closeBtn) {

            closeBtn.addEventListener("click", () => {

                lightbox.classList.remove("active");

            });

        }

        lightbox.addEventListener("click", e => {

            if (e.target === lightbox) {

                lightbox.classList.remove("active");

            }

        });

    }

    /*=========================================
    CONSOLE
    =========================================*/

    console.log(
        "%cMAISON JACQUARD",
        "color:#C8A56A;font-size:28px;font-weight:bold;"
    );

    console.log("The Art of Time");

});