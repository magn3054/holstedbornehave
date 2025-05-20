"use strict";

function showToast() {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "Tak for din tilmelding!<br> Vi kontakter dig hurtigst muligt."; // Gør brug af innerHTML i stedtet for textContent pga. <br>  
    toast.style.transition = "right 0.5s";

    document.body.appendChild(toast);

    setTimeout(() => { // Giver toasten tid til at blive tilføjet til DOM'en
        toast.style.right = "0";
    }, 10);

    setTimeout(() => { // Venter 5 sekunder før toasten fjernes
        toast.style.right = "-100%";
        toast.addEventListener("transitionend", () => {
            toast.remove();
        }, { once: true });
    }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) { 
        form.addEventListener("submit", function(e) { // e er event-objektet
            e.preventDefault(); // Forhindrer standard formularindsendelse (reload) så koden kan execute næste linje
            showToast();
        });
    }
});
