"use strict";

// Hent JSON-data fra filen '../json/alt-om-hb.json'
fetch('../json/nyheder-i-hb.json')
    // Konverter svaret til JSON
    .then(response => response.json())
    .then(data => {
        const nyhed = document.querySelector('#nyheder');
        // Gennemgå hvert element i data-arrayet
        data.forEach(item => {
            // Opret et nyt <section>-element
            const section = document.createElement('section');
            section.classList.add('nyhed');
            // Indsæt titel, dato, tekst og "læs mere"-knap i #nyheder
            // Der gøres brug af template literals til at indsætte dynamisk data
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
    .catch(error => console.error('Error loading JSON:', error)); // Hvis der opstår fejl, log fejlen i konsollen
