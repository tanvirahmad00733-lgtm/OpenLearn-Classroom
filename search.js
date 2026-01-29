function searchVideos() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const container = document.getElementById('playlist-container');
  container.innerHTML = '';

  const filtered = videos.filter(v => v.title.toLowerCase().includes(input) || v.subject.toLowerCase().includes(input));

  filtered.forEach(v => {
    const card = document.createElement('div');
    card.classList.add('playlist-card');
    card.innerHTML = `
      <img src="${v.thumbnail}" alt="${v.title}">
      <h3>${v.title}</h3>
      <button class="do-box" onclick="window.open('${v.url}','_blank')">Do</button>
    `;
    container.appendChild(card);
  });
}

// Initialize all videos on page load
window.onload = searchVideos;
