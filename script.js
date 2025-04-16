fetch('candidati.json')
  .then(response => response.json())
  .then(data => {
    const body = document.querySelector('body');
    body.innerHTML = ''; // Pulisce il contenuto esistente

    data.forEach(candidato => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <div class="left">
          <img src="${candidato.foto}" alt="Foto di ${candidato.nome} ${candidato.cognome}">
          <div class="description">${candidato.descrizione}</div>
        </div>
        <div class="right">
          <h2>${candidato.nome} ${candidato.cognome}</h2>
          <p><strong>Anno di nascita:</strong> ${candidato.anno_nascita}</p>
          <p><strong>Età:</strong> ${candidato.eta}</p>
          <p><strong>Instagram:</strong> <a href="${candidato.instagram}" target="_blank">@${candidato.instagram.split('/').pop()}</a></p>
        </div>
      `;

      body.appendChild(card);
    });
  });
