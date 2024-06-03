const form = document.getElementById('search-form');
const input = document.getElementById('search-box');
form.addEventListener('submit', (event) => {
  if (!input.value) {
    event.preventDefault();
  }
});
