"use strict";

function toggleNav() {
    const sidemenu = document.getElementById("sidemenu");
    const burger = document.getElementById("burger");
    if (sidemenu.style.width === "0%" || sidemenu.style.width === "") {
        sidemenu.style.width = "100%";
        document.body.style.overflow = "hidden";
        burger.classList.add("open");
    } else {
        sidemenu.style.width = "0%";
        document.body.style.overflow = "auto";
        burger.classList.remove("open");
    }
}
