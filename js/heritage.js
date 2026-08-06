/*==================================================
HERITAGE
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".heritage-hero");

    if (hero) {

        window.addEventListener("scroll", () => {

            hero.style.backgroundPositionY =
                -(window.scrollY * 0.25) + "px";

        });

    }

    console.log("MJ Heritage");

});