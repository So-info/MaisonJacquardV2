/*==================================================
MAISON JACQUARD
ROYAL.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    ÉDITION FONDATRICE
    =========================================*/

    const total = 100;
    const reserved = 62;
    const remaining = total - reserved;
    const nextNumber = reserved + 1;

    const reservedElement = document.getElementById("reserved");
    const remainingElement = document.getElementById("remaining");
    const serialElement = document.getElementById("serialNumber");
    const progressElement = document.getElementById("progress");

    if (reservedElement) {
        reservedElement.textContent = reserved;
    }

    if (remainingElement) {
        remainingElement.textContent = remaining;
    }

    if (serialElement) {
        serialElement.textContent = String(nextNumber).padStart(3, "0");
    }

    if (progressElement) {

        progressElement.style.width = "0%";

        setTimeout(() => {

            progressElement.style.width = (reserved / total) * 100 + "%";

        }, 500);

    }

});
/*==================================================
ANIMATIONS PREMIUM
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    ANIMATION DES COMPTEURS
    =========================================*/

    function animateValue(elementId, endValue, duration = 1500) {

        const element = document.getElementById(elementId);

        if (!element) return;

        let start = 0;

        const increment = endValue / (duration / 16);

        const timer = setInterval(() => {

            start += increment;

            if (start >= endValue) {

                start = endValue;

                clearInterval(timer);

            }

            element.textContent = Math.floor(start);

        }, 16);

    }

    animateValue("reserved", 62);

    animateValue("remaining", 38);

    /*=========================================
    EFFET 3D SUR LA MONTRE
    =========================================*/

    const watch = document.getElementById("watch");

    if (watch) {

        watch.addEventListener("mousemove", (e) => {

            const rect = watch.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 14;
            const rotateX = ((y / rect.height) - 0.5) * -14;

            watch.style.transform =
                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.04)`;

        });

        watch.addEventListener("mouseleave", () => {

            watch.style.transform =
                "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";

        });

    }

    /*=========================================
    SURVOL DE LA CARTE DE RÉSERVATION
    =========================================*/

    const reservationBox = document.querySelector(".reservation-box");

    if (reservationBox) {

        reservationBox.addEventListener("mouseenter", () => {

            reservationBox.style.transform = "translateY(-8px)";
            reservationBox.style.boxShadow =
                "0 35px 80px rgba(200,165,106,.25)";

        });

        reservationBox.addEventListener("mouseleave", () => {

            reservationBox.style.transform = "translateY(0)";
            reservationBox.style.boxShadow =
                "0 35px 70px rgba(0,0,0,.45)";

        });

    }

});
/*==================================================
EFFETS FINAUX
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    ANIMATION DE LA BARRE
    =========================================*/

    const progress = document.getElementById("progress");

    if (progress) {

        progress.style.transition = "width 2s cubic-bezier(.22,.61,.36,1)";

    }

    /*=========================================
    BOUTON RÉSERVATION
    =========================================*/

    const reserveButtons = document.querySelectorAll(".reserve-now");

    reserveButtons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px) scale(1.02)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

    /*=========================================
    REFLET SUR LA MONTRE
    =========================================*/

    const watch = document.getElementById("watch");

    if (watch) {

        let animationFrame;

        watch.addEventListener("mousemove", (e) => {

            cancelAnimationFrame(animationFrame);

            animationFrame = requestAnimationFrame(() => {

                const rect = watch.getBoundingClientRect();

                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                watch.style.background =
                    `radial-gradient(circle at ${x}% ${y}%,
                    rgba(255,255,255,.08),
                    transparent 55%)`;

            });

        });

        watch.addEventListener("mouseleave", () => {

            watch.style.background = "none";

        });

    }

    /*=========================================
    PARALLAX LÉGER
    =========================================*/

    const hero = document.querySelector(".royal-hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        hero.style.backgroundPositionY = `${window.scrollY * 0.25}px`;

    });

    /*=========================================
    CONSOLE
    =========================================*/

    console.log(
        "%cMJ Royal",
        "color:#C8A56A;font-size:20px;font-weight:bold;"
    );

    console.log("Edition Fondatrice • 100 exemplaires");

});