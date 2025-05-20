"use strict";

fetch('../json/alt-om-hb.json')
    .then(response => response.json())
    .then(data => {
        const main = document.querySelector('main');
        data.forEach(item => {
            const section = document.createElement('section');
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
    .catch(error => console.error('Error loading JSON:', error));