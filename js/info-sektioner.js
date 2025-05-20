"use strict";

// Hent JSON-data fra filen '../json/alt-om-hb.json'
fetch('../json/alt-om-hb.json')
    // Konverter svaret til JSON
    .then(response => response.json())
    .then(data => {
        const main = document.querySelector('main');
        // Gennemgå hvert element i data-arrayet
        data.forEach(item => {
            // Opret et nyt <section>-element
            const section = document.createElement('section');
            // Indsæt sektion med titel, billede, tekst og evt. knapper i main
            // Der gøres brug af template literals til at indsætte dynamisk data
            // Hvis buttons findes og ikke er tomme, oprettes knapperne fra listen 
            section.innerHTML = `
                <h2>${item.title}</h2>
                <img src="${item.img}" alt="${item.title}">
                <p>${item.body}</p>
                ${item.buttons && item.buttons.length > 0 ? `
                    <div class="knapper">
                        ${item.buttons.map(btn => `<button>${btn}</button>`).join('')}
                    </div>
                ` : ''}
            `;
            main.appendChild(section);
        });
    })
    .catch(error => console.error('Error loading JSON:', error)); // Hvis der opstår fejl, log fejlen i konsollen