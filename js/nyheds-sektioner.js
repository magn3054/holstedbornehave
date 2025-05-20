"use strict";

fetch('../json/nyheder-i-hb.json')
    .then(response => response.json())
    .then(data => {
        const nyhed = document.querySelector('#nyheder');
        data.forEach(item => {
            const section = document.createElement('section');
            section.classList.add('nyhed');
            section.innerHTML = `
                <h3>${item.title}</h3>
                <p class=dato>${item.dato}</p>
                <p class=tekst>${item.body}</p>
                <div class="mere-knap">
                    <button>Læs mere</button>
                </div>
            `;
            nyhed.appendChild(section);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));



    