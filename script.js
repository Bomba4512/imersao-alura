console.log(animes);

var div_animes = document.getElementById('animes_apareca');

for (var anime of animes) {
    div_animes.innerHTML += `
      <div class="div_anime ${anime.genero}">
        <div>
          <img src="${anime.imagem}">
          <h3>${anime.titulo}</h3>
          <p>${anime.descricao}</p>
          <a href="${anime.link}" target="_blank" class="link_anime">Saiba mais</a>
          <span>${anime.genero}</span>
        </div>
      </div>
    `;
  }

  function filtrarPorGenero() {
    const generoSelecionado = document.getElementById("filtroGenero").value;
    const todosAnimes = document.querySelectorAll(".div_anime");
  
    for (const animeDiv of todosAnimes) {
      animeDiv.classList.remove('desaparece');
  
      if (generoSelecionado !== 'Todos' && !animeDiv.classList.contains(generoSelecionado)) {
        animeDiv.classList.add('desaparece'); // Faz desaparecer
      }
    }
  }