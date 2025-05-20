"use strict";

function showToast() {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = "Form submitted!";
    toast.style.transition = 'right 0.5s';

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.right = '0';
    }, 10);

    setTimeout(() => {
        toast.style.right = '-100%';
        toast.addEventListener('transitionend', () => {
            toast.remove();
        }, { once: true });
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            showToast();
        });
    }
});
