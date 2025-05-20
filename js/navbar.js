"use strict";

function toggleNav(trigger="") {
    const sidemenu = document.getElementById("sidemenu");
    const burger = document.getElementById("burger");
    const isClosed = sidemenu.style.width === "0%" || sidemenu.style.width === ""; // OR-logic til tom string for initial state

    if (trigger === "logo") { // hvis toggleNav() kaldes fra logoet check state af sidemenu
        if (isClosed) { // hvis menuen er lukket, dirigeres der til index.html  
            window.location.href = "index.html";
        } else { // hvis menuen er åben, lukkes den
            sidemenu.style.width = "0%";
            document.body.style.overflow = "auto";
            burger.classList.remove("open");
        }
    } else { // hvis toggleNav() kaldes fra burger-menuen (standard), toggles menuen
        if (isClosed) { // åbner menuen
            sidemenu.style.width = "100%";
            document.body.style.overflow = "hidden";
            burger.classList.add("open");
        } else { // lukker menuen
            sidemenu.style.width = "0%";
            document.body.style.overflow = "auto";
            burger.classList.remove("open");
        }
    }
}


