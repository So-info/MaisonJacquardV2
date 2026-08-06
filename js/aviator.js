/*==================================================
AVIATOR
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".aviator-hero");

    if (hero) {

        window.addEventListener("scroll", () => {

            hero.style.backgroundPositionY =
                -(window.scrollY * 0.35) + "px";

        });

    }

    const watch = document.querySelector(".aviator-right img");

    if (watch) {

        watch.addEventListener("mousemove", e => {

            const rect = watch.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rx = ((y / rect.height) - 0.5) * -10;
            const ry = ((x / rect.width) - 0.5) * 10;

            watch.style.transform =
                `perspective(1000px)
                 rotateX(${rx}deg)
                 rotateY(${ry}deg)
                 scale(1.03)`;

        });

        watch.addEventListener("mouseleave", () => {

            watch.style.transform = "none";

        });

    }

    console.log("MJ Aviator");

});